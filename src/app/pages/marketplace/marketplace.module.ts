import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabasesComponent } from './databases/databases.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { InsightsComponent } from './insights/insights.component';



@NgModule({
  declarations: [DatabasesComponent, MessagingComponent, MonitoringComponent, InsightsComponent],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
