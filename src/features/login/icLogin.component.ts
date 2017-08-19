import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/icLogin.service';

@Component({
  selector: 'ic-login',
  templateUrl: 'icLogin.component.html',
  providers: [AuthService]
})

export class IcLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  protected onLoginClick() {
    this.authService.login();
  }
}
