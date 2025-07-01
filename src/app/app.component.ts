import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vinoteca-angular';
  constructor(private router: Router) {}

  esAdmin(): boolean {
    return localStorage.getItem('admin') === 'true';
  }

  logout() {
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
  }
}
