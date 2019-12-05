import { AccountAddBalanceModalComponent } from "./../account-add-balance-modal/account-add-balance-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Loan } from "app/model/loan";
import { LoanService } from "./../../service/loan.service";
import { ActivatedRoute } from "@angular/router";

import { AccountService } from "./../../service/account.service";
import { Component, OnInit } from "@angular/core";
import { Account } from "app/model/account";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.scss","./account-detail.component.css"]
})
export class AccountDetailComponent implements OnInit {
  account: String;
  loan: String;
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private loanService: LoanService,
    private activeModal: NgbModal
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

  openModalUpdate() {
    const modalRef = this.activeModal.open(AccountAddBalanceModalComponent);
    const accountNum = this.route.snapshot.paramMap.get("accountNumber");
    this.accountService
      .getAccountByAccountNumber(accountNum)
      .subscribe(data => {
        // for (const key in data["data"]) {
        //   modalRef.componentInstance[key] = data["data"][key];
        // }
        console.log(data["data"]);

        modalRef.componentInstance.accountNumber =
          data["data"][0].accountNumber;
        modalRef.componentInstance.accountBalance =
          data["data"][0].accountBalance;
      });
  }
}
