import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer: Customer[];
// customerUpdate: Customer = new Customer();
  constructor(
    private customerService: CustomerService,
    private router: Router
    
    ) { }

  ngOnInit() {
    this.getAll();

  }

  reloadData(){
    this.customerService.getAllCustomer().subscribe(data =>{
      this.customer = data;
      console.log(data);
    })
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
    });
  }
  detailCustomerByCif(cif:String){
    this.customerService.getCustomerByCif(cif).subscribe((data) => {
      this.customerService = data['data'];
    })
    this.router.navigate(['form-detail'+ cif]);
  }

  deleteData(cif: String) {
    this.customerService.deleteCustomerByCif(cif).subscribe(data => {
      this.getAll();
    });
  }


  // openModalUpdate(cif){
  //   this.customerService.getById(cif).subscribe(data => {
  //       this.customerUpdate = data['data'];
  //       console.log(this.customerUpdate)
  //       let modalRef = this.modalService.open(ModalComponent);
  //       for (const key in this.customerUpdate){
  //           modalRef.componentInstance[key] = this.customerUpdate[key];
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
  