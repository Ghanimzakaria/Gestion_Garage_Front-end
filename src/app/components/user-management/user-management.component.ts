import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  newUser = {
    username: '',
    email: '',
    role: 'client', // Default role
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Fetch all users
  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error(err),
    });
  }

  // Add a new user
  addUser(): void {
    this.userService.addUser(this.newUser).subscribe({
      next: (response) => {
        alert(response.message);
        this.fetchUsers(); // Refresh the user list
        this.newUser = { username: '', email: '', role: 'client' }; // Reset the form
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add user. Please check the form data.');
      },
    });
  }
}
