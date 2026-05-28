import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  selectedFileName = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);

    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      budget: [''],
      message: [''],
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    }
  }

  get f() { return this.contactForm.controls; }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const templateParams = {
      from_name: this.f['fullName'].value,
      from_email: this.f['email'].value,
      phone: this.f['phone'].value || 'Not provided',
      budget: this.f['budget'].value || 'Not provided',
      message: this.f['message'].value || 'No message provided',
      to_name: 'Krishika Raol',
    };

    try {
      await emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams);
      this.status = 'success';
      this.contactForm.reset();
      this.selectedFileName = '';

      setTimeout(() => { this.status = 'idle'; }, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      this.status = 'error';
      setTimeout(() => { this.status = 'idle'; }, 5000);
    }
  }
}
