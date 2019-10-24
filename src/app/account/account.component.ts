import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
account: Account;
  constructor(private accountService: AccountService) { 
  this.account = new Account();  }

  ngOnInit() {
  }
  addAccountData(account:Account){
    this.accountService.addAccount(account).subscribe(data => {
      this.account = data;

    });
  }
}