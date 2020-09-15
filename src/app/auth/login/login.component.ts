import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isValidIdToken: boolean;
  isValidAccessToken: boolean;

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.isValidAccessToken = this.oAuthService.hasValidAccessToken();
    this.isValidIdToken = this.oAuthService.hasValidIdToken();
  }

  ngOnInit(): void {
    if ( this.isValidAccessToken && this.isValidIdToken ) {
      this.router.navigateByUrl('/pages/overview');
    }
  }

  login() {
    this.oAuthService.initLoginFlow();
  }
}
