import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        alert('Login successful!');
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
