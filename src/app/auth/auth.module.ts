import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { NbButtonModule } from '@nebular/theme';
import { CallbackComponent } from './callback/callback.component';



@NgModule({
  declarations: [LoginComponent, CallbackComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
