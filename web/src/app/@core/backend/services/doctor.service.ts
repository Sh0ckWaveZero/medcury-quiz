import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../interfaces/doctor';
import { DoctorApi } from '../api/doctor-api';


@Injectable()
export class DoctorService extends Doctor {

  constructor(private api: DoctorApi) {
    super();
  }

  list(): Observable<Doctor[]> {
    return this.api.list();
  }
}
