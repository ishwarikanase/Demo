import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { SettleComponent } from '../settle/settle.component';
import { ActivatedRoute, Router } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  public dashboardHeader;
  constructor(public dialog:MatDialog,private router:Router) { }

  openDialogExpense(){
  this.dialog.open(AddExpenseComponent);
  }

  openDialogSettle(){
    this.dialog.open(SettleComponent);
    }

  ngOnInit() {
    if(this.router.url.split('/').includes("dashboard")){
      // console.log(this.router.url.split('/').includes("dashboard"));

      this.dashboardHeader="Dashboard";
    }
    if(this.router.url.split('/').includes("recent")){
      this.dashboardHeader="Recent";
      // console.log(this.router.url);

    }
    if(this.router.url.split('/').includes("groups")){
      // console.log(this.router.url);

      this.dashboardHeader="Groups";
    }
    if(this.router.url.split('/').includes("all")){
      // console.log(this.router.url);
      this.dashboardHeader="All expenses";
    }
    if(this.router.url.split('/').includes("friends")){
      // console.log(this.router.url);

      this.dashboardHeader="Friends";
    }
  }

}
