import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { AccountModule } from './account/account.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { PlatformServicesModule } from './platform-services/platform-services.module';
import { ProjectsModule } from './projects/projects.module';




import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    AccountModule,
    MarketplaceModule,
    PlatformServicesModule,
    ProjectsModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
