import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


  downloadResume() {
    const fileUrl = '/Venkatesh Gs_Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Venkatesh Gs_Resume.pdf'; // Cleaner name if desired
    anchor.click();
  }

}
