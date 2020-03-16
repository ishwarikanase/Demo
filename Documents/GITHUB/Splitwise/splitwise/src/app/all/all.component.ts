import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public groupName="friends";

  stmt=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit() {
  }

}
