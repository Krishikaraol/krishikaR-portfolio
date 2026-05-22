import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ========================================================
// IMPORTANT: Replace these with your actual EmailJS values
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (Gmail/Outlook) → get SERVICE_ID
// 3. Create an email template → get TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account > API Keys
// ========================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

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
    emailjs.init(EMAILJS_PUBLIC_KEY);

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
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
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
