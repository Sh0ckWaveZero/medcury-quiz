
import { Observable } from "rxjs";

export class User {
  name?: string
  telephone?: string
  pinCode?: number
}

export abstract class UserDatabase {
  abstract getWithFilter(telephone: string, pinCode: number): Observable<User>;

  abstract list(): Observable<User[]>;
}
