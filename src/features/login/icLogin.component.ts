import { Component, OnInit } from '@angular/core';

import { IcLoginService } from './shared/icLogin.service';

@Component({
  selector: 'ic-login',
  templateUrl: 'icLogin.component.html',
  providers: [IcLoginService]
})

export class IcLoginComponent implements OnInit {

  constructor(public authService: IcLoginService) { }

  ngOnInit() {
  }

  public onLoginClick() {
    this.authService.login();
  }
}
