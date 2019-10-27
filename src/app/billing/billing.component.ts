import { Billing } from "./../model/billing";
import { BillingService } from "./../service/billing.service";
import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.scss"]
})
export class BillingComponent implements OnInit {
  billing: Billing[];

  constructor(
    private activeModal: NgbModal,
    private billingService: BillingService
  ) {}

  ngOnInit() {
    this.getAllBilling();
  }

  getAllBilling() {
    this.billingService.getAllBilling().subscribe(data => {
      this.billing = data["data"];
      console.log(data["data"]);
    });
  }

  searchByBillingId(String) {
    this.billingService.getBillingByBillingId(String).subscribe(data => {
      this.billing = data["data"];
      console.log(data["data"]);
    });
  }
}
