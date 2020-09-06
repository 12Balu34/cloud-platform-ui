import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { ApiComponent } from './api/api.component';



@NgModule({
  declarations: [SettingsComponent, BillingComponent, ApiComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
