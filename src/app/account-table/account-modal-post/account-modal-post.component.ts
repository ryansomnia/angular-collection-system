import { Account } from "../../model/account";
import { Component, OnInit } from "@angular/core";
import { AccountService } from "app/service/account.service";

import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-account-modal-post",
  templateUrl: "./account-modal-post.component.html",
  styleUrls: ["./account-modal-post.component.scss"]
})
export class AccountModalPostComponent implements OnInit {
  account: Account;
  constructor(
    private accountService: AccountService,
    private activeModal: NgbModal
  ) {
    this.account = new Account();
  }

  ngOnInit() {}

  addAccountData(account: Account) {
    this.accountService.addAccount(account).subscribe(data => {
      this.account = data;
      if (data["responseStatus"]["responseCode"] == "00") {
        this.activeModal.dismissAll();
      } else {
        alert(data["responseStatus"]["responseDesc"]);
      }
    });
  }
}
