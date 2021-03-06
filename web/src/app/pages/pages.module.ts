import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SlidemenuComponent } from '../components/slidemenu/slidemenu.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';

import localeTh from '@angular/common/locales/th';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'

import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog'
import {OrganizationChartModule} from 'primeng/organizationchart';

registerLocaleData(localeTh, 'th');

const primeNgModule = [
  ToastModule,
  ConfirmDialogModule,
  TableModule,
  ToolbarModule,
  RatingModule,
  RadioButtonModule,
  InputNumberModule,
  FileUploadModule,
  MatDialogModule,
  PanelModule,
  FieldsetModule,
  CalendarModule,
  MultiSelectModule,
  InputTextModule,
  DialogModule,
  OrganizationChartModule,
]

const materialModule = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
]

@NgModule({
  declarations: [
    PagesComponent,
    SlidemenuComponent,
    HomeComponent,
    AppointmentComponent,
    UserComponent,
    DoctorComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    ...materialModule,
    ...primeNgModule,

  ],
  providers: [
    HttpClient,
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'th-TH' },
    MessageService,
    ConfirmationService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PagesModule { }
