import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dateRange: any

  doctorForm!: FormControl

  bed: any

  doctorList = [
    { name: "หมอ ก.", code: '001' },
    { name: "หมอ ข.", code: '002' },
  ]
  appointmentList: any
  selectedAppointmentList: any

  constructor() {
    this.doctorForm = new FormControl()
  }

  ngOnInit(): void {
  }

  search() {
    console.log(this.bed)
    console.log(this.doctorForm.invalid)
    console.log(this.doctorForm.value)
  }

  clear() {
    this.dateRange = null
    this.doctorForm.reset()
  }

  mapDateToThai(date: any) {

  }

  onChange(event: any) {
    console.log(event)
  }

}
