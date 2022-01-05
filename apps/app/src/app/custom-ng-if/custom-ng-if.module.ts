import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNgIfDirective } from './custom-ng-if.directive';
import { CustomNgIfComponent } from './custom-ng-if.component';



@NgModule({
  declarations: [
    CustomNgIfDirective,
    CustomNgIfComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomNgIfDirective,CustomNgIfComponent]
})
export class CustomNgIfModule { }
