import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-name-input',
  templateUrl: './task-name-input.component.html',
  styleUrls: ['./task-name-input.component.css']
})
export class TaskNameInputComponent implements OnInit {
  inputNameValue:string;
  constructor() { 
    this.inputNameValue = '';
  }

  ngOnInit() {
    
  }

}
