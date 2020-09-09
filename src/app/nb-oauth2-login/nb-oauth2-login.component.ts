import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbAuthOAuth2Token, NbAuthService, NbAuthResult } from '@nebular/auth';

@Component({
  // selector: 'ngx-nb-oauth2-login',
  selector: 'ngx-nb-oauth2-login',
  template: `
    <button class="btn btn-success" *ngIf="!token" (click)="login()">Login with Keycloak</button>
  `,
})
export class NbOAuth2LoginComponent implements OnDestroy {

  token: NbAuthOAuth2Token;
  private destroy$ = new Subject<void>();

  constructor(private authService: NbAuthService) { }

  login() {
    this.authService.authenticate('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
