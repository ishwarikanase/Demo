import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
  stmt=[1,2,3,4,5,6,7,8,9,10];
  public groupName="group";
  constructor() { }

  ngOnInit() {
  }

}
