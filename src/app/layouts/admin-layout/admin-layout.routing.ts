import { LoandetailComponent } from "./../../loan/loandetail/loandetail.component";
import { BillingComponent } from "./../../billing/billing.component";
import { BillingTableComponent } from "../../loan/billing-table/billing-table.component";
import { DetailsCustomerComponent } from "./../../customer/details-customer/details-customer.component";
import { FormDetailCostumerComponent } from "./../../form-detail-costumer/form-detail-costumer.component";

import { from } from "rxjs";
import { AccountTableComponent } from "./../../account-table/account-table.component";
import { CustomerComponent } from "../../customer/customer.component";
import { ModalComponent } from "./../../modal/modal.component";
import { LoanComponent } from "./../../loan/loan.component";

import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { AccountComponent } from "../../account/account.component";
import { AccountDetailComponent } from "../../account-table/account-detail/account-detail.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "account", component: AccountComponent },
  { path: "loan", component: LoanComponent },
  { path: "customer-table", component: CustomerComponent },
  { path: "detail/:cif", component: DetailsCustomerComponent },
  { path: "accountDetail/:accountNumber", component: AccountDetailComponent },
  { path: "account-table", component: AccountTableComponent },

  { path: "modal", component: ModalComponent },
  { path: "detailLoan/:loanId", component: LoandetailComponent },

  { path: "billing", component: BillingComponent }

  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
];
