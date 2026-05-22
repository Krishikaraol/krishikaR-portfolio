import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  personalInfo = [
    { label: 'Name', value: 'Krishika Raol' },
    { label: 'Location', value: 'Ahmedabad, Gujarat, India' },
    { label: 'Experience', value: '1+ Year' },
    { label: 'Availability', value: 'Available for Work' },
    { label: 'Specialization', value: 'Frontend / Full-Stack' },
  ];

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Krishika_Resume.pdf';
    link.download = 'Krishika_Raol_Resume.pdf';
    link.click();
  }
}
