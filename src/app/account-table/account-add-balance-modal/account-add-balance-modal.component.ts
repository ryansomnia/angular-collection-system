import { ActivatedRoute } from "@angular/router";
import { AccountService } from "app/service/account.service";
import { Component, OnInit, Input, Output } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-account-add-balance-modal",
  templateUrl: "./account-add-balance-modal.component.html",
  styleUrls: ["./account-add-balance-modal.component.scss"]
})
export class AccountAddBalanceModalComponent implements OnInit {
  account: Account;
  @Input() public accountNumber;
  // @Input() public accountBalance;
  @Output() public accountBalance;
  constructor(
    private activeModal: NgbModal,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  topUpBalance() {
    const accountNum = this.route.snapshot.paramMap.get("accountNumber");
    let temp = {
      accountBalance: this.accountBalance
    };

    this.accountService
      .topUpBalance(this.accountNumber, temp)
      .subscribe(data => {
        this.account = data.data;
        console.log(data);
      });
  }
}
