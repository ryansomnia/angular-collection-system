import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.scss']
})
export class TablePagingComponent implements OnInit {
public account: any
p: number;
  constructor() { }

  ngOnInit() {
this.account =[
  {
    "accountNumber": 1,
    "customerCif": "join123",
    "accountBalance": 255555.0,
    "createdAt": "29-12-1927"
},
{
    "accountNumber": 23,
    "customerCif": "askd",
    "accountBalance": 255555.0,
    "createdAt": "30-12-1927"
},
{
    "accountNumber": 213,
    "customerCif": "askd",
    "accountBalance": 2.000223E7,
    "createdAt": "30-12-1927"
},
{
    "accountNumber": 12345,
    "customerCif": "cobapindah",
    "accountBalance": 123123.0,
    "createdAt": "11-12-2000"
},
{
    "accountNumber": 13141,
    "customerCif": "KKKK",
    "accountBalance": 2371.0,
    "createdAt": "31-12-1969"
},
{
    "accountNumber": 20000,
    "customerCif": "20000",
    "accountBalance": 20000.0,
    "createdAt": "31-12-1927"
},
{
    "accountNumber": 22423,
    "customerCif": "asdmln",
    "accountBalance": 20000.0,
    "createdAt": "31-12-1997"
},
{
    "accountNumber": 23231,
    "customerCif": "asdasd",
    "accountBalance": 20000.0,
    "createdAt": "31-12-1927"
},
{
  "accountNumber": 123124,
  "customerCif": "asdsa",
  "accountBalance": 9999.0,
  "createdAt": "31-12-1999"
},
{
  "accountNumber": 434343,
  "customerCif": "join123",
  "accountBalance": 44444.0,
  "createdAt": "11-12-0012"
}

]

  }

}
