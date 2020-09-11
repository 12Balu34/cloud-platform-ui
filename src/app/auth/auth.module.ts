import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [LoginComponent],
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
