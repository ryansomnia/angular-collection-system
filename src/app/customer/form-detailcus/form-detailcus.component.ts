import { Customer } from "./../../model/customer";
import { Component, OnInit, Input } from "@angular/core";
import { CustomerService } from "../../service/customer.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-form-detailcus",
  templateUrl: "./form-detailcus.component.html",
  styleUrls: ["./form-detailcus.component.scss"]
})
export class FormDetailcusComponent implements OnInit {
  @Input() private cif;
  @Input() public firstName;
  @Input() public lastName;
  @Input() public address;
  @Input() public birthDate;
  @Input() public birthPlace;
  private customer: Customer;
  constructor(
    private activeModal: NgbModal,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  updateBook() {
    let temp = {
      cif: this.cif,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      birthDate: this.birthDate,
      birthPlace: this.birthPlace
    };

    this.customerService.updateCustomer(this.cif, temp).subscribe(data => {
      this.customer = data;
      console.log(data);
      if (data["responseStatus"]["responseCode"] == "00") {
        this.activeModal.dismissAll();
      } else {
        alert(data["responseStatus"]["responseDesc"]);
      }
    });
  }
}
