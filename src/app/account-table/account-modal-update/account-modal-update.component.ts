import { Component, OnInit, Input } from "@angular/core";

import { AccountService } from "../../service/account.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "app/model/account";
@Component({
  selector: "app-account-modal-update",
  templateUrl: "./account-modal-update.component.html",
  styleUrls: ["./account-modal-update.component.scss"]
})
export class AccountModalUpdateComponent implements OnInit {
  @Input() private accountNumber;
  @Input() public customerCif;
  @Input() public accountBalance;
  @Input() public createdAt;

  private account: Account;
  constructor(
    private activeModal: NgbModal,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  updateAccount() {
    let temp = {
      accountNumber: this.accountNumber,
      customerCif: this.customerCif,
      accountBalance: this.accountBalance,
      createdAt: this.createdAt
    };

    this.accountService
      .updateAccount(this.accountNumber, temp)
      .subscribe(data => {
        this.account = data;
        console.log(data);
        if (data["responseStatus"]["responseCode"] == "00") {
          this.activeModal.dismissAll();
        } else {
          alert(data["responseStatus"]["responseDesc"]);
        }
      });
  }
}
