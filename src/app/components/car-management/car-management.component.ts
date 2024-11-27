import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car/car.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-car-management',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './car-management.component.html',
  styleUrl: './car-management.component.css'
})
export class CarManagementComponent implements OnInit {
  cars: any[] = [];
  newCar = { registration_number: '', brand: '', model: '', status: 'in_progress' };
  selectedCar: any = null;
  editMode: boolean = false;

  registration_number: string = '';
  brand: string = '';
  model: string = '';
  status: string = 'in_progress';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  addCar(): void {
    const carToAdd = { registration_number: this.registration_number, brand: this.brand, model: this.model, status: this.status };
    this.carService.addCar(carToAdd).subscribe(() => {
      this.fetchCars();
      this.resetForm();
    });
  }

  updateCar(): void {
    if (this.selectedCar) {
      const updatedCar = { registration_number: this.registration_number, brand: this.brand, model: this.model, status: this.status };
      this.carService.updateCar(this.selectedCar.id, updatedCar).subscribe(() => {
        this.fetchCars();
        this.resetForm();
        this.selectedCar = null;
        this.editMode = false;
      });
    }
  }

  deleteCar(registration: string): void {
    this.carService.deleteCar(registration).subscribe(() => {
      this.fetchCars();
    });
  }

  selectCar(car: any): void {
    this.selectedCar = { ...car };
    this.registration_number = car.registration_number;
    this.brand = car.brand;
    this.model = car.model;
    this.status = car.status;
    this.editMode = true;
  }

  resetForm(): void {
    this.registration_number = '';
    this.brand = '';
    this.model = '';
    this.status = 'in_progress';
  }
}
