import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
// import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { AppointmentDatabase } from 'src/app/@core/interfaces/appointment';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  selectedAppointmentList!: any
  Delete!: any
  appointmentList!: any
  appointment: any = {}
  productDialog!: any
  submitted!: any
  statuses!: any

  picker: any


  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  status = new FormControl();

  statusList = [
    { name: 'ถูกจอง', code: true },
    { name: 'ว่าง', code: false },
  ];

  value1!: any

  constructor(
    public dialog: MatDialog,
    private appointmentService: AppointmentDatabase,
    // private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit() {
    // this.primengConfig.ripple = true;
    // this.search()

  }

  search() {

    console.log(this.value1)
    console.log(this.dateRange.value, this.status.value)
    let start = undefined
    let end = undefined
    if (this.dateRange.value.start || this.dateRange.value.end) {
      start = new Date(this.dateRange.value.start)
      end = new Date(this.dateRange.value.end)
    }

    this.appointmentService.getList(start, end, this.status.value).subscribe((data: any) => {
      this.appointmentList = data
    })
  }

  clear() {
    this.dateRange.reset()
    this.status.reset()
    // this.search()

  }

  saveProduct() { }
  deleteSelectedProducts() { }
  editProduct(e: any) { }
  deleteProduct(e: any) { }
  events: string[] = [];
  openNew() {
    this.appointment = {};
    this.submitted = false;
    this.productDialog = true;
  }
  hideDialog() { }


  mapDateToThai(date: Date) {
    const _date = new Date(date)
    return _date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  emailUpdated(e: any) {
    console.log(e.target.value)
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}

