import { Component, OnInit } from "@angular/core";
import { Customer } from "../model/customer";
import { CustomerService } from "../service/customer.service";
import { Router } from "@angular/router";
import { FormModalCusComponent } from "./form-modal-cus/form-modal-cus.component";
import { FormDetailcusComponent } from "./form-detailcus/form-detailcus.component";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css", "./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  customer: Customer[];
  p:number;
  // customerUpdate: Customer = new Customer();
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activeModal: NgbModal
  ) {}

  ngOnInit() {
    this.getAll();
    this.customerService.reloaded.subscribe(() => {
      this.getAll();
    });
  }

  reloadData() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
      console.log(data);
    });
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
    });
  }
  detailCustomerByCif(String) {
    this.customerService.getCustomerByCif(String).subscribe(data => {
      this.customerService = data["data"];
    });
  }

  deleteCus(cif: String) {
    this.customerService.deleteCustomerByCif(cif).subscribe(data => {
      this.getAll();
    });
  }

  findCus(String) {
    this.customerService.SearchCustomerByName(String).subscribe(data => {
      this.customer = data["data"];
    });
  }

  open() {
    this.activeModal.open(FormModalCusComponent);
  }

  searchByCif(String) {
    this.customerService.SearchCustomerByCif(String).subscribe(data => {
      this.customer = data["data"];
      console.log(data["data"]);
    });
  }

  openModalUpdate(cif) {
    const modalRef = this.activeModal.open(FormDetailcusComponent);

    this.customerService.getCustomerByCif(cif).subscribe(data => {
      // for (const key in data["data"]) {
      //   modalRef.componentInstance[key] = data["data"][key];
      // }

      modalRef.componentInstance.cif = data["data"].cif;
      modalRef.componentInstance.firstName = data["data"].firstName;
      modalRef.componentInstance.lastName = data["data"].lastName;
      modalRef.componentInstance.address = data["data"].address;
      modalRef.componentInstance.birthDate = data["data"].birthDate;
      modalRef.componentInstance.birthPlace = data["data"].birthPlace;

      console.log(data);
    });
  }
}
