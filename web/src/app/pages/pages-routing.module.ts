import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AppointmentComponent } from './appointment/appointment.component';
import { UserComponent } from "./user/user.component";
import { DoctorComponent } from "./doctor/doctor.component";


const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "appointment",
        component: AppointmentComponent,
      },
      {
        path: "doctor",
        component: DoctorComponent,
      },
      {
        path: "user",
        component: UserComponent,
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
