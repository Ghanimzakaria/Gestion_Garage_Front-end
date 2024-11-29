import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RoleGuard} from './role.guard';
import {ClientComponent} from './components/client/client.component';
import {CarManagementComponent} from './components/car-management/car-management.component';
import {AuthGuard} from './auth.guard';
import {UserManagementComponent} from './components/user-management/user-management.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'car', component: CarManagementComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['admin','employee'] }},
  { path: 'user', component: UserManagementComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['admin'] }},
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard, RoleGuard]}
];
