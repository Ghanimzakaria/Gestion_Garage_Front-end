import {Component, OnInit} from '@angular/core';
import {ClientCarService} from '../../services/Client-car/client-car.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CarService} from '../../services/car/car.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  carDetails: any = null; // Holds car data

  constructor(private carService: ClientCarService
  ) {}

  ngOnInit(): void {
    this.loadCarDetails();
  }

  // Fetch car details for the logged-in client
  loadCarDetails(): void {

    this.carService.getCarDetails().subscribe({
      next: (data) => {
        this.carDetails = data;
        console.log(this.carDetails)
      },
      error: (err) => {
        console.error('Failed to load car details:', err);
      },
    });
  }
}
