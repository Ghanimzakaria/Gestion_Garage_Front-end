import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCarService {
  private apiUrl = 'http://localhost:8000/Garage'; // Change this to votre URL d'API réelle

  constructor(private http: HttpClient) {}

  // Get car details for the logged-in client
  getCarDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/client/`);
  }
}
