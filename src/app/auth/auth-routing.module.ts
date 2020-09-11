import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { NbAuthComponent } from '@nebular/auth';


const routes: Routes = [{
  path: '',
  component: NbAuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
