import { Loan } from "app/model/loan";
import { LoanService } from "./../../service/loan.service";
import { ActivatedRoute } from "@angular/router";

import { AccountService } from "./../../service/account.service";
import { Component, OnInit } from "@angular/core";
import { Account } from "app/model/account";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.scss"]
})
export class AccountDetailComponent implements OnInit {
  account: String;
  loan: String;
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private loanService: LoanService
  ) {}

  ngOnInit() {
    this.getAccountData();
    this.getLoanByAccountNumber();
    console.log(this.getLoanByAccountNumber());
  }

  getAccountData() {
    const accountNum = this.route.snapshot.paramMap.get("accountNumber");
    this.accountService
      .getAccountByAccountNumber(accountNum)
      .subscribe(data => {
        this.account = data["data"];
        console.log(data["data"]);
      });
  }

  getLoanByAccountNumber() {
    const accountNum = this.route.snapshot.paramMap.get("accountNumber");
    this.loanService.getLoanByAccountId(accountNum).subscribe(data => {
      this.loan = data["data"];
      console.log(data["data"]);
    });
  }
}
