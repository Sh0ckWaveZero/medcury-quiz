import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Appointment } from '../../interfaces/appointment';
import { AppointmentApi } from '../api/appointment-api';

@Injectable()
export class AppointmentService extends Appointment {

  constructor(private api: AppointmentApi) {
    super();
  }

  get(id: string): Observable<Appointment> {
    return this.api.get(id);
  }

  getList(
    startDate: Date,
    endDate: Date,
    status: any,
    doctorId?: any,
  ): Observable<any> {
    return this.api.getList(startDate, endDate, status,doctorId);
  }

  create(item: any): Observable<Appointment> {
    return this.api.add(item);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
}
