
import { Observable } from "rxjs";

export class Appointment {
  id?: string;
  code?: string
  name?: string
  doctorId?: string
  appointmentDate?: Date | undefined
  isReserve?: boolean
  pinCode?: number
  telephone?: string
  createdAt?: number
  updatedAt?: number
}

export abstract class AppointmentDatabase {

  abstract get(id: string): Observable<Appointment>;
  abstract getList(
    startDate?: Date,
    endDate?: Date,
    status?: any,
    doctorId?: any
  ): Observable<any>;
  abstract update(item: Appointment): Observable<Appointment>;
  abstract create(item: Appointment): Observable<Appointment>;
}
