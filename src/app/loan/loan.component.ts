import { LoanModalPostComponent } from './loan-modal-post/loan-modal-post.component';
import { LoanService } from './../service/loan.service';
import { Component, OnInit } from '@angular/core';
import { Loan } from 'app/model/loan';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loan: Loan[];
loans: Loan = new Loan();
  constructor(
    private loanService: LoanService
  ) { }

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
      
      console.log(data)
    });
  }
}

