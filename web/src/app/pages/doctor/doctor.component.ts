import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { AppointmentDatabase } from 'src/app/@core/interfaces/appointment';
import { DoctorDatabase } from 'src/app/@core/interfaces/doctor';
import { Appointment } from '../../@core/interfaces/appointment';
import { Doctor } from '../../@core/interfaces/doctor';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  dateRange: any
  doctorForm!: FormControl
  doctorList: Doctor[] = []
  appointmentList: any
  selectedAppointmentList: any

  summaryReserve!: TreeNode[];

  countReserveA: number = 0;
  countUnReserveA: number = 0;
  countReserveB: number = 0;
  countUnReserveB: number = 0;

  constructor(
    private appointmentService: AppointmentDatabase,
    private doctorService: DoctorDatabase,
  ) {
    this.doctorForm = new FormControl()
  }

  ngOnInit(): void {
    this.getDoctorInfo()
  }

  clear() {
    this.dateRange = null
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
    ).subscribe((data: Appointment[]) => {
      data.filter((item: Appointment) => {
        if (item.doctorId === '001') {
          item.isReserve ? (this.countReserveA += 1) : (this.countUnReserveA += 1)
        } else {
          item.isReserve ? (this.countReserveB += 1) : (this.countUnReserveB += 1)
        }
      })
      this.mapData()
    })
  }

  mapData() {
    let childrenInfo: any[] = []
    let doctor = {}

    if (this.doctorForm.value) {
      this.doctorForm.value.forEach((item: string) => {
        if (item === '001') {
          doctor = {
            label: 'หมอ ก.',
            children: [
              { label: `จองแล้ว ${this.countReserveA} ครั้ง` },
              { label: `ยังไม่ได้จอง ${this.countUnReserveA} ครั้ง` }
            ]
          }
        } else {
          doctor = {
            label: 'หมอ ข.',
            children: [
              { label: `จองแล้ว ${this.countReserveB} ครั้ง` },
              { label: `ยังไม่ได้จอง ${this.countUnReserveB} ครั้ง` }
            ]
          }
        }
        childrenInfo.push(doctor)
      })
    } else {
      childrenInfo.push({
        label: 'หมอ ก.',
        children: [
          { label: `จองแล้ว ${this.countReserveA} ครั้ง` },
          { label: `ยังไม่ได้จอง ${this.countUnReserveA} ครั้ง` }
        ]
      },
        {
          label: 'หมอ ข.',
          children: [
            { label: `จองแล้ว ${this.countReserveB} ครั้ง` },
            { label: `ยังไม่ได้จอง ${this.countUnReserveB} ครั้ง` }
          ]
        })
    }

    this.summaryReserve = [{
      label: 'ภาพรวมของการจอง',
      children: childrenInfo
    }];
    childrenInfo = []
    this.countReserveA = 0
    this.countUnReserveA = 0
    this.countReserveB = 0
    this.countUnReserveB = 0
  }

  getDoctorInfo() {
    this.doctorService.list().subscribe((data: any) => {
      this.doctorList = data
    })
  }
}
