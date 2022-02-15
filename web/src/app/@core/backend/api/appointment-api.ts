import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "../http.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AppointmentApi {
  private readonly apiController: string = "appointment";

  constructor(private api: HttpService) { }

  get(id: string): Observable<any> {
    return this.api.get(`${this.apiController}/${id}`).pipe(
      map((data) => {
        return { ...data };
      })
    );
  }

  getList(
    startDate: Date,
    endDate: Date,
    status: any,
    doctorId?: any,
  ): Observable<any> {
    const params = new HttpParams()
      .set("startDate", `${startDate}`)
      .set("endDate", `${endDate}`)
      .set("status", `${status}`)
      .set("doctorId", `${doctorId}`)
    return this.api.get(this.apiController, { params }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(`${this.apiController}/${id}`, { responseType: 'text' });
  }

  add(item: any): Observable<any> {
    return this.api.post(this.apiController, item);
  }

  update(item: any): Observable<any> {
    return this.api.patch(`${this.apiController}`, item);
  }
}
