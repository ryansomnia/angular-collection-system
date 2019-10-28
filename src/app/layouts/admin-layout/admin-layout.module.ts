import { AccountAddBalanceModalComponent } from "./../../account-table/account-add-balance-modal/account-add-balance-modal.component";
import { NgxPaginationModule } from "ngx-pagination";
import { BillingTableComponent } from "../../loan/billing-table/billing-table.component";
import { LoandetailComponent } from "./../../loan/loandetail/loandetail.component";
import { BillingComponent } from "./../../billing/billing.component";
import { AccountModalUpdateComponent } from "./../../account-table/account-modal-update/account-modal-update.component";
import { FormModalCusComponent } from "./../../customer/form-modal-cus/form-modal-cus.component";
import { FormDetailcusComponent } from "./../../customer/form-detailcus/form-detailcus.component";
import { FormDetailCostumerComponent } from "./../../form-detail-costumer/form-detail-costumer.component";
import { AccountTableComponent } from "./../../account-table/account-table.component";
import { ModalComponent } from "./../../modal/modal.component";
import { LoanComponent } from "./../../loan/loan.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";

import { AccountComponent } from "../../account/account.component";
import { CustomerComponent } from "../../customer/customer.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountModalPostComponent } from "app/account-table/account-modal-post/account-modal-post.component";
import { DetailsCustomerComponent } from "../../customer/details-customer/details-customer.component";
import { AccountDetailComponent } from "../../account-table/account-detail/account-detail.component";

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from "@angular/material";
import { from } from "rxjs";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    FormModalCusComponent,
    UserProfileComponent,

    AccountComponent,
    LoanComponent,
    LoandetailComponent,
    ModalComponent,
    CustomerComponent,
    AccountTableComponent,
    FormDetailCostumerComponent,
    BillingComponent,
    FormDetailcusComponent,
    AccountModalPostComponent,
    AccountModalUpdateComponent,
    DetailsCustomerComponent,
    BillingTableComponent,
    AccountDetailComponent,
    FormDetailCostumerComponent,
    AccountAddBalanceModalComponent
  ],
  entryComponents: [
    FormModalCusComponent,
    FormDetailcusComponent,
    AccountModalPostComponent,
    AccountModalUpdateComponent,
    AccountAddBalanceModalComponent
  ],
  providers: [NgbActiveModal]
})
export class AdminLayoutModule {}
