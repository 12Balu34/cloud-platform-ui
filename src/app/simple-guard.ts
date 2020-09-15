import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class SimpleGuard implements CanActivate {


  constructor(private oAuthService: OAuthService, private router: Router) {
  }

  canActivate() {
    if (this.oAuthService.hasValidIdToken() && this.oAuthService.hasValidAccessToken()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
