import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { IcLoginService } from './shared/icLogin.service';

@Component({
  selector: 'ic-login',
  templateUrl: 'icLogin.component.html',
  providers: [IcLoginService],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icLogin.component.scss']
})

export class IcLoginComponent implements OnInit {

  constructor(public authService: IcLoginService) { }

  ngOnInit() {
  }

  public onLoginClick() {
    this.authService.login();
  }
}
