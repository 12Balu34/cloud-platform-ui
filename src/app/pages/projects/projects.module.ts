import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [NewProjectComponent, OverviewComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
