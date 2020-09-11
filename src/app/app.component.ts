/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { oauthConfig } from './oauth-config';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private oAuthService: OAuthService) {
    this.oAuthService.configure(oauthConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.setupAutomaticSilentRefresh();
  }

  ngOnInit(): void {

  }
}
