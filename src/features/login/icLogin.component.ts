import { Component, OnInit } from '@angular/core';

import { IcLogin } from './shared/icLogin.model';
import { IcLoginService } from './shared/icLogin.service';

@Component({
  selector: 'ic-login',
  templateUrl: 'icLogin.component.html',
  providers: [IcLoginService]
})

export class IcLoginComponent implements OnInit {
  icLogin: IcLogin[] = [];

  constructor(private icLoginService: IcLoginService) { }

  ngOnInit() {
    // this.icLoginService.getList().subscribe((res) => {
    //   this.icLogin = res;
    // });
  }
}
