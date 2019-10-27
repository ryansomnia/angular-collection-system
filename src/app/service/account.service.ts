import { Account } from "./../model/account";
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError, retry, tap, map } from "rxjs/operators";
import Api from "./Api";
@Injectable({
  providedIn: "root"
})
export class AccountService {
  private reload = new Subject<void>();
  constructor(private http: HttpClient) {}
  api_url = "http://192.168.1.14:8080/account/";

  getAccountByAccountNumber(accountNumber: String): Observable<any> {
    return this.http.get(this.api_url + accountNumber);
  }
  get reloaded() {
    return this.reload;
  }

  getAllAccount(): Observable<Account[]> {
    return this.http
      .get<Account[]>(this.api_url)
      .pipe(map(response => response["data"]));
  }
  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.api_url, account).pipe(
      tap(() => {
        this.reloaded.next();
      })
    );
  }
  deleteAccountByAccountNumber(accountNumber: Number) {
    return this.http.delete<Account>(this.api_url + accountNumber);
  }
  searchByAccountNumber(account: Number): Observable<any> {
    return this.http.get(this.api_url + account);
  }

  searchAccountByCIF(cif: String): Observable<any> {
    return this.http.get<Account>(this.api_url + "cif?cif=" + cif);
  }
  updateAccount(accountNumber: Number, value: any): Observable<any> {
    return this.http.put(this.api_url + accountNumber, value).pipe(
      tap(() => {
        this.reloaded.next();
      })
    );
  }
}
