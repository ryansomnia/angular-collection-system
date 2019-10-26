import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Loan } from "./../model/loan";
import { Injectable } from "@angular/core";
import Api from "./Api";
@Injectable({
  providedIn: "root"
})
export class LoanService {
  api_url = Api + "loan/";
  constructor(private http: HttpClient) {}

  getAllLoan(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.api_url);
  }
  getLoanByLoanId(String): Observable<any> {
    return this.http.get(this.api_url + String);
  }
  getLoanByAccountId(accuntId: String): Observable<any> {
    return this.http.get(
      this.api_url + "accountNumber?accountNumber=" + accuntId
    );
  }
  // getLoanByLoanNumber
  // getLoanByLoanStatus
  // getLoanByOpenDate
  // getLoanByDueDate
  // getLoanByLoanTenor
  // getLoanByLoanTypeCode
  // getLoanByCustomerCif
  // getPage
  // getAllLoanType
  // getLoanTypeByLoanTypeCode
  // addLoan(loan: Loan): Observable<Loan> {
  //   return this.http.post<Loan>(this.api_url, loan);
  // }
  // addLoanType

  // updateLoan(loanId: Number, value:any): Observable<any> {
  //     return this.http.put(this.api_url + loanId, value);

  // deleteLoanTypeByLoanTypeCode

  // getPage
}
