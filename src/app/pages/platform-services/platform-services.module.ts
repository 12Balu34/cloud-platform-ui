import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRuntimeComponent } from './app-runtime/app-runtime.component';
import { KubernetesComponent } from './kubernetes/kubernetes.component';
import { VmComponent } from './vm/vm.component';
import { VirtualMachinesComponent } from './virtual-machines/virtual-machines.component';
import { ObjectStorageComponent } from './object-storage/object-storage.component';



@NgModule({
  declarations: [
    AppRuntimeComponent, 
    KubernetesComponent, 
    VmComponent, 
    VirtualMachinesComponent, 
    ObjectStorageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlatformServicesModule { }
