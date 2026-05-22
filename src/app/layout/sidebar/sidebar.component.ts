import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  activeSection = 'home';
  isMenuOpen = false;
  currentYear = new Date().getFullYear();

  navItems = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
    { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fa-solid fa-file-lines' },
    { id: 'services', label: 'Services', icon: 'fa-solid fa-briefcase' },
    { id: 'skills', label: 'Skills', icon: 'fa-solid fa-chart-bar' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa-solid fa-grid-2' },
    { id: 'pricing', label: 'Pricing', icon: 'fa-solid fa-tag' },
    { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
  ];

  socialLinks = [
    { icon: 'fa-brands fa-github', url: '#', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', url: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-upwork', url: '#', label: 'Upwork' },
    { icon: 'fa-brands fa-fiverr', url: '#', label: 'Fiverr' },
  ];

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.initScrollSpy();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  private initScrollSpy() {
    const options = { threshold: 0.3 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    setTimeout(() => {
      this.navItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) this.observer.observe(el);
      });
    }, 500);
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.activeSection = sectionId;
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
