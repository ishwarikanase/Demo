import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friendName;
  friends=[
    {"id":1,"name":"Raj k."},
    {"id":2,"name":"Amruta Vidhate"},
    {"id":3, "name":"Bhor Pooja"},
    {"id":4,"name":"Sarla Hume"}
  ]

  stmt=[1,2,3,4,5,6,7,8,9,10];

  constructor(private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      let frnd=this.friends.find(frnd=>frnd.id==params.id);
      this.friendName=frnd.name;
    })
  }

}
