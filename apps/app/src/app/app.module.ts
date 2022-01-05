import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomNgIfModule } from './custom-ng-if/custom-ng-if.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,CustomNgIfModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
