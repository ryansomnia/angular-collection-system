import { LoanModalPostComponent } from "./loan-modal-post/loan-modal-post.component";
import { LoanService } from "./../service/loan.service";
import { Component, OnInit } from "@angular/core";
import { Loan } from "app/model/loan";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-loan",
  templateUrl: "./loan.component.html",
  styleUrls: ["./loan.component.css", "./loan.component.scss"]
})
export class LoanComponent implements OnInit {
  loan: Loan[];
  p: number;
  loans: Loan = new Loan();
  constructor(private loanService: LoanService) {}

  ngOnInit() {
    this.getAll();
  }

  reloadData() {
    this.loanService.getAllLoan().subscribe(data => {
      this.loan = data;
      console.log(data);
    });
  }
  getAll() {
    this.loanService.getAllLoan().subscribe(data => {
      this.loan = data["data"];

      console.log(data);
    });
  }

  searchLoan(String) {
    this.loanService.getLoanByLoanId(String).subscribe(data => {
      if (data["data"] != undefined) {
        this.loan = data["data"];
      } else {
        alert("Loan Not Found");
      }

      console.log(data["data"]);
    });

    // const b = this.loanService.getLoanByAccountId(String).subscribe(data => {
    //   this.loan = data["data"];

    //   console.log(data);
    // });
  }
  searchLoanByAccId(String) {
    this.loanService.getLoanByAccountId(String).subscribe(data => {
      this.loan = data["data"];

      console.log(data);
    });
  }

  loanss = {};
}
