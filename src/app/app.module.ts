import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IcAppComponent } from './app.component';

// features
import { IcLoginModule } from '../features/login/icLogin.module';
import { IcLoginService } from '../features/login/shared/icLogin.service';
@NgModule({
  declarations: [
    IcAppComponent
  ],
  imports: [
    BrowserModule,
    IcLoginModule
  ],
  providers: [
    IcLoginService
  ],
  bootstrap: [IcAppComponent]
})
export class AppModule { }
