
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { STORAGE_KEYS } from '../services/storage-keys-constants';

@Injectable()
export class LoginFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            this.router.navigate(['dashboard']);
            return false;
        } else {
            return true;
        }
    }
}

@Injectable()
export class RegisterFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            this.router.navigate(['dashboard']);
            return false;
        } else {
            return true;
        }
    }
}
@Injectable()
export class ForgotFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            this.router.navigate(['dashboard']);
            return false;
        } else {
            return true;
        }
    }
}
// Reset Password Flow Gaurd
@Injectable()
export class ResetPasswordFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            return true;
        } else {
            return false;
        }
    }
}

@Injectable()
export class ProfileFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            return true;
        } else {
         this.router.navigate(['login']);
            return false;
        }
    }
}

@Injectable()
export class ThemeProfileFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

@Injectable()
export class CreateResumeFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sharedService.isUserAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

@Injectable()
export class DashboardFlowGuard implements CanActivate {

    constructor(private sharedService: SharedService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
         if (this.sharedService.isUserAuthenticated()) {
            return true;
         } else {
             this.router.navigate(['login']);
             return false;
         }
    }
}

