import { AccountService } from './../service/account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {
account: Account[];
// accountUpdate: Account = new Account();
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAll();

  }

  reloadData(){
    this.accountService.getAllAccount().subscribe(data =>{
      this.account = data;
      console.log(data);
    })
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
    this.accountService.deleteAccountByAccountNumber(accountNumber).subscribe(data => {
      this.getAll();
    });
  }


  // openModalUpdate(accountNumber){
  //   this.accountService.getAccountByAccountNumber(accountNumber).subscribe(data => {
  //       this.accountUpdate = data['data'];
  //       console.log(this.accountUpdate)
  //       let modalRef = this.modalService.open(ModalComponent);
  //       for (const key in this.accountUpdate){
  //           modalRef.componentInstance[key] = this.accountUpdate[key];
  //       }
  
  //       modalRef.result.then(value => {
  //         if (value == 1) {
  //           this.reloadData();
  //         }
  
  //       }).catch(value => {
  //         console.log('THEN' + value);
  //       });
  //     });
  
  
 // } 
  }
  