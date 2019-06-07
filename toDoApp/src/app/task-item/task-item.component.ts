import { Component, OnInit } from '@angular/core';

const toDoItems =[{name:'clean room', task:'clean living room', completed:false},
{ name:'wash dishes', task: 'wash dishesssssssssss', completed:true}]

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  toDoItems;
  // completed:boolean;
  constructor() {

    this.toDoItems = toDoItems
   }

  ngOnInit() {
  }

  togle(item) {
   item.completed = !item.completed
  }
  delete(item) {
    let index= this.toDoItems.indexOf(item);
    if (index > -1) {
      this.toDoItems.splice(index, 1);
    }
  }
}
