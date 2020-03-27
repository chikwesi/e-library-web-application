import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToasterService } from '../service/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toaster: ToasterService) {

  }
  roles = [];
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let userId = this.auth.getLoggedInUser().userId
    const dataRole = next.data.role;
    if (userId == dataRole){
      return true
    }
    else {
         this.toaster.error("You don't have permission to view this, please login")
    }
    this.router.navigate(['/login']);
 
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}
