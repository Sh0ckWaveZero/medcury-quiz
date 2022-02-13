import { Observable } from "rxjs";
import { HttpService } from "../http.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Doctor } from '../../interfaces/doctor';

@Injectable()
export class DoctorApi {
  private readonly apiController: string = "doctors";

  constructor(private api: HttpService) { }

  list(): Observable<Doctor[]> {
    return this.api.get(this.apiController).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
