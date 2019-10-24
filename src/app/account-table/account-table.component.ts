import { AccountModalUpdateComponent } from "./account-modal-update/account-modal-update.component";
import { AccountService } from "./../service/account.service";
import { Account } from "./../model/account";
import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountModalPostComponent } from "./account-modal-post/account-modal-post.component";

@Component({
  selector: "app-account-table",
  templateUrl: "./account-table.component.html",
  styleUrls: ["./account-table.component.css"]
})
export class AccountTableComponent implements OnInit {
  account: Account[];
  // accountUpdate: Account = new Account();
  constructor(
    private accountService: AccountService,
    private activeModal: NgbModal
  ) {}

  ngOnInit() {
    this.getAll();
  }

  reloadData() {
    this.accountService.getAllAccount().subscribe(data => {
      this.account = data;
      console.log(data);
    });
  }

  getAll() {
    this.accountService.getAllAccount().subscribe(data => {
      this.account = data;
    });
  }
  // getAccountByAccountNumber(accountNumber){
  //   console.log(accountNumber);
  //   this.openModalUpdate(accountNumber);
  // }

  deleteData(accountNumber: Number) {
    this.accountService
      .deleteAccountByAccountNumber(accountNumber)
      .subscribe(data => {
        this.getAll();
      });
  }

  openModalAdd() {
    this.activeModal.open(AccountModalPostComponent);
  }

  openModalUpdate(accNum) {
    const modalRef = this.activeModal.open(AccountModalUpdateComponent);

    this.accountService.getAccountByAccountNumber(accNum).subscribe(data => {
      // for (const key in data["data"]) {
      //   modalRef.componentInstance[key] = data["data"][key];
      // }

      modalRef.componentInstance.accountNumber = data["data"].accountNumber;
      modalRef.componentInstance.customerCif = data["data"].customerCif;
      modalRef.componentInstance.accountBalance = data["data"].accountBalance;
      modalRef.componentInstance.createdAt = data["data"].createdAt;

      console.log(data["data"]);
    });
  }
}
