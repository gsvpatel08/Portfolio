import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,FormsModule, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isResumeOrWork(): boolean {
    return this.currentRoute.includes('resume') || this.currentRoute.includes('work');
  }

  downloadResume() {
    const fileUrl = '/Venkatesh Gs_Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Venkatesh Gs_Resume.pdf';
    anchor.click();
  }


}
