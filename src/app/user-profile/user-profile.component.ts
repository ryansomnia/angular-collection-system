import { CustomerService } from '../service/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  customer:Customer;
  constructor(private customerService: CustomerService) {
    this.customer = new Customer();  }

  ngOnInit() {
  }

  addCustomerData(customer:Customer){
    this.customerService.addCustomer(customer).subscribe(data => {
      this.customer = data;

    });
  }
}
