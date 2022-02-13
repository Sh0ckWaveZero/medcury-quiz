import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppointmentDatabase } from 'src/app/@core/interfaces/appointment';
import { UserDatabase } from 'src/app/@core/interfaces/user';
import * as _ from 'underscore';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  selectedAppointmentList!: any
  appointmentList!: any
  appointment: any = {}
  appointmentDialog!: boolean;
  submitted: boolean = false;

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  status = new FormControl();

  statusList = [
    { name: 'ถูกจอง', code: true },
    { name: 'ว่าง', code: false },
  ];

  constructor(
    public dialog: MatDialog,
    private appointmentService: AppointmentDatabase,
    private usertService: UserDatabase,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  search() {
    let start = undefined
    let end = undefined
    if (this.dateRange.value.start || this.dateRange.value.end) {
      start = new Date(this.dateRange.value.start)
      end = new Date(this.dateRange.value.end)
    }

    this.appointmentService.getList(
      start,
      end,
      this.status.value,
      null
    ).subscribe((data: any) => {
      this.appointmentList = data
    })
  }

  clear() {
    this.dateRange.reset()
    this.status.reset()
    this.search()
  }

  editAppointment(appointment: any) {
    this.appointmentDialog = true;
    this.appointment = { ...appointment };
  }

  hideDialog() {
    this.appointment = {};
    this.appointmentDialog = false;
    this.submitted = false;
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

  async saveAppointment() {
    if (!this.submitted && !this.appointment.telephone) return
    if (!this.submitted && !this.appointment.pinCode) return

    this.usertService.getWithFilter(this.appointment.telephone, this.appointment.pinCode).subscribe((user$: any) => {
      if (_.isEmpty(user$)) {
        this.messageService.add({ severity: 'error', summary: 'ผิดพลาด', detail: 'ไม่พบข้อมูลของคนไข้รายนี้', life: 3000 });
        return
      }
      this.appointment = { ...this.appointment }
      this.appointment.isReserve = true
      this.appointment.name = user$[0].name
      this.appointment.pinCode = this.appointment.pinCode
      this.appointment.telephone = this.appointment.telephone

      this.appointmentService.update(this.appointment).subscribe((data: any) => {
        this.appointmentDialog = false;
        this.appointment = {};
        this.search();
        this.messageService.add({ severity: 'success', summary: 'สำเร็จ', detail: 'จองนัดหมายเรียบร้อย', life: 1500 });
      })
    })
  }

  deleteAppointment(appointment: any) {
    if (!appointment.isReserve) {
      this.messageService.add({ severity: 'info', summary: 'แจ้ง', detail: 'ไม่ยกเลิกการจองของคนไข้รายนี้ได้', life: 3000 });
      return
    }

    this.confirmationService.confirm({
      message: 'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกนัดหมายนี้',
      header: 'ยกเลิกการจอง',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usertService.getWithFilter(appointment.telephone, appointment.pinCode).subscribe((user$: any) => {

          if (_.isEmpty(user$)) {
            this.messageService.add({ severity: 'error', summary: 'ผิดพลาด', detail: 'ไม่พบข้อมูลของคนไข้รายนี้', life: 3000 });
            return
          }
          this.appointment = { ...appointment }
          this.appointment.isReserve = false
          this.appointment.name = null
          this.appointment.pinCode = null
          this.appointment.telephone = null
          this.appointmentService.update(this.appointment).subscribe((data: any) => {
            this.appointmentDialog = false;
            this.appointment = {};
            this.search();
            this.messageService.add({ severity: 'success', summary: 'สำเร็จ', detail: 'ยกเลิกนัดหมายเรียบร้อย', life: 1500 });
          })
        })
      }
    });
  }
}

