import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Project } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  private ps = inject(PortfolioService);
  allProjects = this.ps.getProjects();
  filteredProjects = [...this.allProjects];
  activeFilter = 'All';
  lightboxProject: Project | null = null;

  filters = ['All', 'Angular', 'NodeJs', 'MongoDB'];

  applyFilter(tag: string) {
    this.activeFilter = tag;
    if (tag === 'All') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.tags.includes(tag));
    }
  }

  openLightbox(project: Project) {
    this.lightboxProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxProject = null;
    document.body.style.overflow = '';
  }
}
