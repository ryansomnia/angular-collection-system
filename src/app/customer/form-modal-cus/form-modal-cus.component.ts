import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../service/customer.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Customer } from "app/model/customer";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-form-modal-cus",
  templateUrl: "./form-modal-cus.component.html",
  styleUrls: ["./form-modal-cus.component.scss"]
})
export class FormModalCusComponent implements OnInit {
  customer: Customer;
  constructor(
    private activeModal: NgbModal,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
    this.customer = new Customer();
  }

  ngOnInit() {}

  onSubmit() {
    this.customerService.addCustomer(this.customer).subscribe(data => {
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
