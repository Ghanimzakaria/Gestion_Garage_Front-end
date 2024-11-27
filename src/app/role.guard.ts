import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userRole = this.authService.getRole();  // Get role from stored JWT or session

    if (route.data['role'] && !route.data['role'].includes(userRole)) {
      // If the role doesn't match, redirect to a different page (e.g., home)
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
