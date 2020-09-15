import { Component, OnInit } from '@angular/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.oAuthService.events.subscribe(
      event => this.handleOauthEvents(event)
    );
  }

  ngOnInit(): void {
  }

  private handleOauthEvents(event: OAuthEvent) {
    if (event.type === 'token_received' || event.type === 'token_refreshed') {
      this.router.navigateByUrl('/pages/overview');
    }
  }
}
