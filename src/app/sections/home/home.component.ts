import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
declare const VANTA: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('vantaBg') vantaBg!: ElementRef;
  @ViewChild('typedEl') typedEl!: ElementRef;

  private vantaEffect: any;
  private typed: any;

  stats = [
    { value: '1+', label: 'Years of\nExperience' },
    { value: '5+', label: 'Real-World\nFeatures Developed' },
    { value: '5+', label: 'Responsive\nWeb Projects' },
  ];

  ngAfterViewInit() {
    this.initTyped();
    this.initVanta();
    this.initCounters();
  }

  private initTyped() {
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: [
        'Frontend Developer',
        'Angular Developer',
        'MEAN Stack Enthusiast',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  private initVanta() {
    if (typeof VANTA !== 'undefined') {
      this.vantaEffect = VANTA.NET({
        el: this.vantaBg.nativeElement,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x28e98c,
        backgroundColor: 0x1f1f1f,
        points: 10.00,
        maxDistance: 22.00,
        spacing: 18.00
      });
    }
  }

  private initCounters() {
    const counterEls = document.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute('data-target') || '0');
          this.animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(el => observer.observe(el));
  }

  private animateCounter(el: HTMLElement, target: number) {
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = Math.floor(progress * target) + '+';
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
    if (this.typed) this.typed.destroy();
  }
}
