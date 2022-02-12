import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "../http.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AppointmentApi {
  private readonly apiController: string = "appointment";

  constructor(private api: HttpService) { }

  list(
    pageNumber: number = 1,
    pageSize: number = 10,
    keyword: string = "",
    startDate: Date,
    endDate: Date,
    countryId: string = "",
    status: string = "",
    sortBy: string = "updatedDate",
    orderBy: string = "DESC"
  ): any {
    const params = new HttpParams()
      .set("orderBy", `${orderBy}`)
      .set("sortBy", `${sortBy}`)
      .set("status", `${status}`)
      .set("countryId", `${countryId}`)
      .set("endDate", `${endDate}`)
      .set("startDate", `${startDate}`)
      .set("keyword", `${keyword}`)
      .set("pageSize", `${pageSize}`)
      .set("pageNumber", `${pageNumber}`);
    return this.api.get(this.apiController, { params }).pipe(
      map((data: Observable<any>): any => {
        return { ...data };
      })
    );
  }

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
    status: boolean,
  ): Observable<any> {
    const params = new HttpParams()
      .set("startDate", `${startDate}`)
      .set("endDate", `${endDate}`)
      .set("status", `${status}`)
    return this.api.get(this.apiController, { params }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(`${this.apiController}/${id}`);
  }

  add(item: any): Observable<any> {
    return this.api.post(this.apiController, item);
  }

  update(item: any): Observable<any> {
    return this.api.put(`${this.apiController}/${item.id}`, item);
  }
}
