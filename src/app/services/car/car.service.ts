// src/app/services/car.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:8000/Garage/cars/'; // URL de l'API

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCar(car: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'add/', car);
  }

  updateCar(immatriculation: string, car: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${immatriculation}/update/`, car);
  }

  deleteCar(immatriculation: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${immatriculation}/delete/`);
  }
}
