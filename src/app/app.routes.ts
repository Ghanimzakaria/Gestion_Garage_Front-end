import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RoleGuard} from './role.guard';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {ClientComponent} from './components/client/client.component';
import {CarManagementComponent} from './components/car-management/car-management.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { roles: ['admin'] }},
  { path: 'car', component: CarManagementComponent, canActivate: [RoleGuard], data: { roles: ['admin'] }},
  { path: 'employee', component: EmployeeComponent, canActivate: [RoleGuard], data: { roles: ['employee'] }},
  { path: 'client', component: ClientComponent, canActivate: [RoleGuard], data: { roles: ['client'] }}

];
