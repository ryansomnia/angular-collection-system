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
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  customer: Customer[];
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
  detailCustomerByCif(cif: String) {
    this.customerService.getCustomerByCif(cif).subscribe(data => {
      this.customerService = data["data"];
    });
    this.router.navigate(["form-detail" + cif]);
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
