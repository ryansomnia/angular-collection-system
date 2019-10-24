import { Account } from './../model/account';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  api_url = "http://192.168.1.8:8080/account/";

  getAccountByAccountNumber(accountNumber: Number): Observable<any> {
    return this.http.get(this.api_url + accountNumber);
  }

  getAllAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.api_url).pipe(map(response => response['data']));
  }
  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.api_url, account);
  }
  deleteAccountByAccountNumber(accountNumber: Number) {
    return this.http.delete<Account>(this.api_url + accountNumber);
  }
  updateAccount(accountNumber: Number, value:any): Observable<any> {
    return this.http.put(this.api_url + accountNumber, value);

  }

}
