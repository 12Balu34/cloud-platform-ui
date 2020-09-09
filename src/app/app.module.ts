/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';
import { NbOAuth2LoginComponent } from './nb-oauth2-login/nb-oauth2-login.component';
import { NbOAuth2CallbackComponent } from './nb-oauth2-callback/nb-oauth2-callback.component';

@NgModule({
  declarations: [AppComponent, NbOAuth2LoginComponent, NbOAuth2CallbackComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'keycloak',
          clientId: 'ngx-admin',
          clientSecret: '',
          authorize: {
            endpoint: 'http://passthepopcorn.de/auth/realms/ngx-admin/protocol/openid-connect/auth',
            responseType: NbOAuth2ResponseType.CODE,
            scope: 'address email',
            // TODO: stimmt wahrscheinlich nicht
            redirectUri: 'http://localhost:4200/callback',
          },
        }),
      ],
    }),
    NbCardModule,
    NbLayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
