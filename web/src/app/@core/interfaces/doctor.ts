
import { Observable } from "rxjs";

export class Doctor {
  doctorId?: string
  name?: string
  appointmentDate?: string[]
  appointmentStartTime?: string
  appointmentEndTime?: string
  slotTime?: number
}

export abstract class DoctorDatabase {
  abstract list(): Observable<Doctor[]>;
}
