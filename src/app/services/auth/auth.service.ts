import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/Garage/login/'; // l'URL de  backend

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {

    return this.http.post(this.apiUrl, credentials);
  }

  saveToken(access_token: string,refresh_token: string,role:string,): void {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('role', role)


  }
  getRole(){
    return localStorage.getItem('role')
  }


}
