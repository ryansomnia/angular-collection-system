import { CustomerService } from "./../../service/customer.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "app/service/account.service";
@Component({
  selector: "app-details-customer",
  templateUrl: "./details-customer.component.html",
  styleUrls: ["./details-customer.component.scss"]
})
export class DetailsCustomerComponent implements OnInit {
  private detailCus: String;
  private accCusData: String;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getDataCustomer();

    this.getDataAccountByCIF();
    console.log(this.getDataAccountByCIF());
  }

  getDataCustomer() {
    const cif = this.route.snapshot.paramMap.get("cif");
    this.customerService.getCustomerByCif(cif).subscribe(data => {
      this.detailCus = data["data"];
    });
  }

  getDataAccountByCIF() {
    const cif = this.route.snapshot.paramMap.get("cif");
    this.accountService.searchAccountByCIF(cif).subscribe(data => {
      this.accCusData = data["data"];
    });
  }
}
