import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  isCollapsed: Boolean;
  text: string;
  visiability:boolean;
  constructor() {
    
    this.text= "Joptttt"
  //   this.items = ['Angular','React', 'Vue'];
  //   // this.loggedIn = false;
  //   this.isCollapsed = false;
  }

  toggle() {
    this.visiability = !this.visiability;
  }

  addTask() {
    this.isCollapsed=!this.isCollapsed;
  }
  ngOnInit() {
  }

}
