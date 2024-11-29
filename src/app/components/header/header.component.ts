import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  role:string|null = localStorage.getItem('role')
  logout() {
    // Clear user session or token (depending on your auth setup)
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('role')
    this.router.navigate(['/login']); // Redirect to login page
  }
}
