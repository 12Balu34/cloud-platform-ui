import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  identityClaims: Object;

  constructor(private oAuthService: OAuthService) { }

  ngOnInit(): void {
    this.identityClaims = this.oAuthService.getIdentityClaims();
  }

}
