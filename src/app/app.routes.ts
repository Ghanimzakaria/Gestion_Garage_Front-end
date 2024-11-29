import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RoleGuard} from './role.guard';
import {ClientComponent} from './components/client/client.component';
import {CarManagementComponent} from './components/car-management/car-management.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'car', component: CarManagementComponent, canActivate: [AuthGuard]},
  { path: 'user', component: CarManagementComponent, canActivate: [AuthGuard]},
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard]}
];
