import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { IcLoginComponent } from './icLogin.component';

@NgModule({
  declarations: [
    IcLoginComponent
  ],
  imports: [
    HttpModule
  ],
  providers: [],
  exports: [IcLoginComponent]
})
export class IcLoginModule { }
