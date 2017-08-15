import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IcAppComponent } from './app.component';

// features
import { IcLoginModule } from '../features/login/icLogin.module';
@NgModule({
  declarations: [
    IcAppComponent
  ],
  imports: [
    BrowserModule,
    IcLoginModule
  ],
  providers: [],
  bootstrap: [IcAppComponent]
})
export class AppModule { }
