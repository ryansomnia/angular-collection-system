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
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { AccountComponent } from "../../account/account.component";
import { CustomerComponent } from "../../customer/customer.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountModalPostComponent } from "app/account-table/account-modal-post/account-modal-post.component";
import { DetailsCustomerComponent } from "../../customer/details-customer/details-customer.component";

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
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    FormModalCusComponent,
    UserProfileComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AccountComponent,
    LoanComponent,
    ModalComponent,
    CustomerComponent,
    AccountTableComponent,
    FormDetailCostumerComponent,
    FormDetailcusComponent,
    AccountModalPostComponent,
    AccountModalUpdateComponent,
    DetailsCustomerComponent
  ],
  entryComponents: [
    FormModalCusComponent,
    FormDetailcusComponent,
    AccountModalPostComponent,
    AccountModalUpdateComponent
  ],
  providers: [NgbActiveModal]
})
export class AdminLayoutModule {}
