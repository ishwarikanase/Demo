import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  stmt=[1,2,3,4,5,6,7,8,9,10];

  groups=[
    {"id":1, "name":"Avengers"},
    {"id":2,"name":"WE"},
    {"id":3, "name":"TIPS"}
  ]
  public groupName;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let grp=this.groups.find(grp=>grp.id==params.id);
      this.groupName=grp.name;
    })
  }

}
