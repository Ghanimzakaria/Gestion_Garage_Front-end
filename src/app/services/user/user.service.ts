import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/Garage'; // Change this to your actual API base URL

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/register/`);
  }

  // Add a new user
  addUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register/`, userData);
  }
}
