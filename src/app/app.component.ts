import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ServicesComponent } from './sections/services/services.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { ContactComponent } from './sections/contact/contact.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    SkillsComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  isLoading = true;

  ngOnInit() {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      offset: 60,
    });
  }

  ngAfterViewInit() {
    // Hide page loader after page is ready
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  }
}
