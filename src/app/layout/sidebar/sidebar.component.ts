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

  socialLinks: { icon: string; url: string; label: string; svgIcon?: string }[] = [
    { icon: 'fa-brands fa-github', url: 'https://github.com/Krishikaraol', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/krishikaraol/', label: 'LinkedIn' },
    { icon: 'fa-brands fa-upwork', url: 'https://www.upwork.com/freelancers/~01127a549496e493ea?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01127a549496e493ea%2Fprofile', label: 'Upwork' },
    {
      icon: '',
      url: 'https://www.fiverr.com/krishika09?public_mode=true',
      label: 'Fiverr',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.514h-1.653v-3.606h-.84v-.96h.84v-.372c0-.974.558-1.694 1.638-1.694.234 0 .569.04.79.1l-.1.881c-.12-.03-.273-.059-.4-.059-.38 0-.527.215-.527.537v.607h.85v.96zm-4.547 3.606h-1.654v-3.606h-.84v-.96h.84v-.372c0-.974.557-1.694 1.637-1.694.235 0 .57.04.79.1l-.099.881c-.12-.03-.274-.059-.4-.059-.38 0-.528.215-.528.537v.607h.85v.96h-.596v3.606zm-3.985 0h-1.654v-4.566h1.654v4.566zm-.826-5.466a.936.936 0 0 1-.938-.938.938.938 0 1 1 .938.938zM8.675 15.588c-1.458 0-2.454-.938-2.454-2.395 0-1.418.996-2.396 2.454-2.396.88 0 1.536.352 1.888.86l-.86.684c-.215-.274-.537-.41-.86-.41-.683 0-1.087.468-1.087 1.262 0 .82.468 1.28 1.106 1.28.41 0 .762-.2 1.006-.527l.8.625c-.42.567-1.085.998-1.993.998zm-3.408-.097a.995.995 0 1 1 .002-1.99.995.995 0 0 1-.002 1.99zm-1.88-3.528h-.85v3.616H.88v-3.606H0v-.96h.88v-.606c0-.975.557-1.694 1.638-1.694.234 0 .568.04.79.1l-.1.88c-.12-.03-.273-.058-.4-.058-.38 0-.527.215-.527.537v.841h.85v.95h-.745z"/></svg>`
    },
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
