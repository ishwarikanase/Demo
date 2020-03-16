import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard-left',
  templateUrl: './dashboard-left.component.html',
  styleUrls: ['./dashboard-left.component.scss']
})
export class DashboardLeftComponent implements OnInit {
  groups=[
    {"id":1, "name":"Avengers"},
    {"id":2,"name":"WE"},
    {"id":3, "name":"TIPS"}
  ]
  friends=[
    {"id":1,"name":"Raj k."},
    {"id":2,"name":"Amruta Vidhate"},
    {"id":3, "name":"Bhor Pooja"},
    {"id":4,"name":"Sarla Hume"}

  ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  onSelectGroup(group){
    this.router.navigate(['./groups',group.id],{relativeTo:this.route});
  }
  onSelectFriend(friend){
    this.router.navigate(['./friends',friend.id],{relativeTo:this.route});
  }

  ngOnInit() {
  }

}
