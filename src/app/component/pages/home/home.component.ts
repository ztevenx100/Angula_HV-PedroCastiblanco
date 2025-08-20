import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title  = "Mi pagina";
  
  // Estados de imagen para performance
  imageLoaded = false;
  imageError = false;

  constructor(private router: Router) {}

  onImageLoad(): void {
    this.imageLoaded = true;
    this.imageError = false;
  }

  onImageError(): void {
    this.imageLoaded = true;
    this.imageError = true;
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
