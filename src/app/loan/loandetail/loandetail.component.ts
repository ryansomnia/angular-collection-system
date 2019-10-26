import { BillingService } from "./../../service/billing.service";
import { Loan } from "./../../model/loan";
import { LoanService } from "./../../service/loan.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-loandetail",
  templateUrl: "./loandetail.component.html",
  styleUrls: ["./loandetail.component.scss"]
})
export class LoandetailComponent implements OnInit {
  loanCus: String;
  getbyLoanId: String;
  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private billingService: BillingService
  ) {}

  ngOnInit() {
    this.getDataLoan();
    this.getDataBillingByLoanId();
  }

  getDataLoan() {
    const loan = this.route.snapshot.paramMap.get("loanId");
    this.loanService.getLoanByLoanId(loan).subscribe(data => {
      this.loanCus = data.data;
      console.log(data.data);
    });
  }

  getDataBillingByLoanId() {
    const loan = this.route.snapshot.paramMap.get("loanId");
    this.billingService.getBillingByLoan(loan).subscribe(data => {
      this.getbyLoanId = data["data"];
      console.log(data["data"]);
    });
  }
}
