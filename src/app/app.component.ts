import { Component } from '@angular/core';

import { IcLoginService } from '../features/login/shared/icLogin.service';

@Component({
  selector: 'ic-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [IcLoginService]
})
export class IcAppComponent {
  title = 'iCenterX';

  constructor(public loginService: IcLoginService) {
    loginService.handleAuthentication();
  }
}
