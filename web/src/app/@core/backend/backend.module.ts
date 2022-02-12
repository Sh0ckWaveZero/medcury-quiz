import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDatabase } from '../interfaces/appointment';
import { AppointmentService } from './services/appointment.service';
import { AppointmentApi } from './api/appointment-api';
import { HttpService } from './http.service';

const API: any = [
  AppointmentApi
]

const SERVICES: any = [
  { provide: AppointmentDatabase, useClass: AppointmentService },
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


