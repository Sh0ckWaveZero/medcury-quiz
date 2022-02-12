import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Appointment } from '../../interfaces/appointment';
import { AppointmentApi } from '../api/appointment-api';

@Injectable()
export class AppointmentService extends Appointment {

  constructor(private api: AppointmentApi) {
    super();
  }

  list(
    pageNumber: number = 1,
    pageSize: number = 10,
    keyword: string = "",
    startDate: Date,
    endDate: Date,
    countryId: string = "",
    status: string = "",
    sortBy: string = "updatedDate",
    orderBy: string = "DESC"
  ): Observable<Appointment[]> {
    return this.api.list(
      pageNumber,
      pageSize,
      keyword,
      startDate,
      endDate,
      countryId,
      status,
      sortBy,
      orderBy
    );
  }

  get(id: string): Observable<Appointment> {
    return this.api.get(id);
  }

  getList(
    startDate: Date,
    endDate: Date,
    status: boolean,
  ): Observable<any> {
    return this.api.getList(startDate, endDate, status);
  }

  create(item: any): Observable<Appointment> {
    return this.api.add(item);
  }

  update(item: any): Observable<Appointment> {
    return this.api.update(item);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
}
