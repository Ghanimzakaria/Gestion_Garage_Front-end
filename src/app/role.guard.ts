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
      console.log('rrrrrrrrrrrrrrrr',route.data['role'].includes(userRole))
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
