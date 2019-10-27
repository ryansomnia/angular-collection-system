import { Injectable } from "@angular/core";
import { Billing } from "./../model/billing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError, retry, tap, map } from "rxjs/operators";
import Api from "./Api";

@Injectable({
  providedIn: "root"
})
export class BillingService {
  constructor(private http: HttpClient) {}
  api_url = Api + "billing/";

  getAllBilling(): Observable<Billing[]> {
    return this.http
      .get<Billing[]>(this.api_url)
      .pipe(map(response => response));
  }

  getBillingByLoan(String): Observable<Billing> {
    return this.http.get<Billing>(this.api_url + "loanId?loanId=" + String);
  }

  getBillingByBillingId(String): Observable<Billing> {
    return this.http.get<Billing>(this.api_url + String);
  }
}
