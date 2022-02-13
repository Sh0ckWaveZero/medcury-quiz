import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "../http.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { User } from "../../interfaces/user";

@Injectable()
export class UserApi {
  private readonly apiController: string = "users";

  constructor(private api: HttpService) { }

  getWithFilter(
    telephone: string,
    pinCode: number,
  ): Observable<any> {
    const params = new HttpParams()
      .set("telephone", `${telephone}`)
      .set("pinCode", `${pinCode}`)
    return this.api.get(`${this.apiController}/filter`, { params }).pipe(
      map((data) => {
        return data ;
      })
    );
  }

  list(): Observable<User[]> {
    return this.api.get(this.apiController).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
