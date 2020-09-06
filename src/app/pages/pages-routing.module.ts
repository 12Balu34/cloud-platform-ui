import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { AppRuntimeComponent } from './platform-services/app-runtime/app-runtime.component';
import { KubernetesComponent } from './platform-services/kubernetes/kubernetes.component';
import { ObjectStorageComponent } from './platform-services/object-storage/object-storage.component';
import { VirtualMachinesComponent } from './platform-services/virtual-machines/virtual-machines.component';
import { DatabasesComponent } from './marketplace/databases/databases.component';
import { MessagingComponent } from './marketplace/messaging/messaging.component';
import { MonitoringComponent } from './marketplace/monitoring/monitoring.component';
import { InsightsComponent } from './marketplace/insights/insights.component';
import { SettingsComponent } from './account/settings/settings.component';
import { BillingComponent } from './account/billing/billing.component';
import { ApiComponent } from './account/api/api.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'projects',
      component: NewProjectComponent,
    },
    {
      path: 'platform-services/app-runtime',
      component: AppRuntimeComponent,
    },
    {
      path: 'platform-services/kubernetes',
      component: KubernetesComponent,
    },
    {
      path: 'platform-services/object-storage',
      component: ObjectStorageComponent,
    },
    {
      path: 'platform-services/virtual-machines',
      component: VirtualMachinesComponent,
    },
    {
      path: 'marketplace/databases',
      component: DatabasesComponent,
    },
    {
      path: 'marketplace/messaging',
      component: MessagingComponent,
    },
    {
      path: 'marketplace/monitoring',
      component: MonitoringComponent,
    },
    {
      path: 'marketplace/insights',
      component: InsightsComponent,
    },
    {
      path: 'account/settings',
      component: SettingsComponent,
    },
    {
      path: 'account/billing',
      component: BillingComponent,
    },
    {
      path: 'account/api',
      component: ApiComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
