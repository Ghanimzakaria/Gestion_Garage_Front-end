import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  newUser = {
    username: '',
    password: '',
    role: 'client', // Default role
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    const userToAdd = { ...this.newUser };
    this.userService.addUser(userToAdd).subscribe(() => {
      this.fetchUsers(); // Refresh the user list
      this.resetForm(); // Reset the form
    });
  }

  deleteUser(username: string): void {
    this.userService.deleteUser(username).subscribe(() => {
      this.fetchUsers(); // Refresh the user list
    });
  }

  resetForm(): void {
    this.newUser = { username: '', password: '', role: 'client' };
  }
}
