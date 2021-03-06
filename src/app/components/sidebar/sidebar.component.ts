import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  // { path: "/user-profile", title: "Form Costumer ", icon: "content_paste", class: "" },
  // {path: '/account', title: 'Form Account', icon:' content_paste', class:''},
  { path: "/loan", title: "Loan Data", icon: " view_list", class: "" },
  {
    path: "/customer-table",
    title: "Customer Data",
    icon: " person",
    class: ""
  },
  {
    path: "/billing",
    title: "Billing Data",
    icon: " library_books",
    class: ""
  },
  {
    path: "/account-table",
    title: "Account Data",
    icon: " bubble_chart",
    class: ""
  }

  // {path: '/billing-table', title:'Billing Datas', icon:'person', class: '' }

  // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css", "./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
