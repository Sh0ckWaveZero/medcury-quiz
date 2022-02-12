
import { Observable } from "rxjs";

export class Appointment {
  id?: string;
  code?: string
  name?: string
  countryId?: string
  countries?: any
  status?: string
  flag_delete?: string
  created_by?: string
  created_date?: number
  updated_by?: string
  updated_date?: number
}

export abstract class AppointmentDatabase {
  abstract list(
    pageNumber: number,
    pageSize: number,
    keyword: string,
    startDate: Date,
    endDate: Date,
    countryId: string,
    status: string,
    sortBy: string,
    orderBy: string
  ): Observable<Appointment[]>;
  abstract get(id: string): Observable<Appointment>;
  abstract getList(startDate?: Date, endDate?: Date, status?: any): Observable<any>;
  abstract update(item: Appointment): Observable<Appointment>;
  abstract create(item: Appointment): Observable<Appointment>;
  abstract delete(id: number): Observable<boolean>;
}
