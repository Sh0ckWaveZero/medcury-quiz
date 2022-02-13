import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDatabase } from '../interfaces/appointment';
import { AppointmentService } from './services/appointment.service';
import { AppointmentApi } from './api/appointment-api';
import { HttpService } from './http.service';
import { UserDatabase } from '../interfaces/user';

import { UserApi } from './api/user-api';
import { UserService } from './services/user.service';
import { DoctorDatabase } from '../interfaces/doctor';
import { DoctorService } from './services/doctor.service';
import { DoctorApi } from './api/doctor-api';

const API: any = [
  AppointmentApi,
  UserApi,
  DoctorApi,
]

const SERVICES: any = [
  { provide: AppointmentDatabase, useClass: AppointmentService },
  { provide: UserDatabase, useClass: UserService },
  { provide: DoctorDatabase, useClass: DoctorService },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class BackendModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: BackendModule,
      providers: [...API, ...SERVICES, HttpService],
    };
  }
}


