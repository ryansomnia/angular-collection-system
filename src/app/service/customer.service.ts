import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";
import { Customer } from "../model/customer";
import { map } from "rxjs/operators";
import Api from "./Api";
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private reload = new Subject<void>();
  constructor(private http: HttpClient) {}
  api_url = Api + "customer/";

  getCustomerByCif(cif: String): Observable<any> {
    return this.http.get(this.api_url + cif);
  }

  get reloaded() {
    return this.reload;
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.api_url)
      .pipe(map(response => response["data"]));
  }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.api_url, customer).pipe(
      tap(() => {
        this.reloaded.next();
      })
    );
  }
  deleteCustomerByCif(cif: String) {
    return this.http.delete<Customer>(this.api_url + cif);
  }

  SearchCustomerByName(cif: String) {
    return this.http.get<Customer>(this.api_url + "name?name=" + cif);
  }
  SearchCustomerByCif(cif: String) {
    return this.http.get<Customer>(this.api_url + cif);
  }

  updateCustomer(cif: String, value: any): Observable<any> {
    return this.http.put(this.api_url + cif, value).pipe(
      tap(() => {
        this.reloaded.next();
      })
    );
  }
}
