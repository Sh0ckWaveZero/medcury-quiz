import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppointmentDatabase } from 'src/app/@core/interfaces/appointment';
import { DoctorDatabase } from 'src/app/@core/interfaces/doctor';
import { Doctor } from '../../@core/interfaces/doctor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  doctorForm = new FormControl();
  doctorList: Doctor[] = []
  appointmentList: any
  selectedAppointmentList: any

  constructor(
    private appointmentService: AppointmentDatabase,
    private doctorService: DoctorDatabase,
  ) { }

  ngOnInit(): void {
    this.getDoctorInfo()
  }

  clear() {
    this.doctorForm.reset()
  }

  mapDateToThai(date: Date) {
    const _date = new Date(date)
    return _date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  getDoctor(code: string) {
    return this.doctorList.filter(doctor => doctor.doctorId === code)
      .map(doctor => doctor.name)[0]
  }

  search() {
    this.appointmentService.getList(
      undefined,
      undefined,
      null,
      this.doctorForm.value
    ).subscribe((data: any) => {
      this.appointmentList = data
    })
  }

  getDoctorInfo() {
    this.doctorService.list().subscribe((data: any) => {
      this.doctorList = data
    })
  }
}
