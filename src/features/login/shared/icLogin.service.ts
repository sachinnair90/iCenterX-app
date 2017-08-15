import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IcLogin } from './icLogin.model';

@Injectable()
export class IcLoginService {

  constructor(private http: Http) { }

  getList(): Observable<IcLogin[]> {
  return this.http.get('/api/list').map(res => res.json() as IcLogin[]);
  }
}
