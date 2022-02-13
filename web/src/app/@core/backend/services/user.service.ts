import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../interfaces/user';
import { UserApi } from '../api/user-api';

@Injectable()
export class UserService extends User {

  constructor(private api: UserApi) {
    super();
  }

  getWithFilter(
    telephone: string,
    pinCode: number,
  ): Observable<any> {
    return this.api.getWithFilter(telephone, pinCode);
  }

  list(): Observable<User[]> {
    return this.api.list();
  }
}
