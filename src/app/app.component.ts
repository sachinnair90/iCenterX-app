import { Component } from '@angular/core';

import { AuthService } from '../features/login/shared/icLogin.service';

@Component({
  selector: 'ic-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AuthService]
})
export class IcAppComponent {
  title = 'iCenterX';

  constructor(public authService: AuthService) {
    authService.handleAuthentication();
  }
}
