import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
  username: '',
  password: ''
  }
  errorMessage = '';
  constructor(private authService: AuthService,
              private router: Router
  ) {}

  onLogin(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token,response.role);
        if (response) {
          // Navigate based on user role
          if (response.role === 'admin') {
            this.router.navigate(['/admin'])

          } else if (response.role === 'employee') {
            this.router.navigate(['/employee']);
          } else if (response.role === 'client') {
            this.router.navigate(['/client']);
          }
        }
        alert('Login successful!');
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
