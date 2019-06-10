import { Component, OnInit } from '@angular/core';

export class ToDoItem {

  constructor(public name: string,
    public task: string,
    public completed: boolean = false) {

    this.name = name;
    this.task = task;
    this.completed = completed
  }
}

let toDoItems: ToDoItem[] = [{ name: 'clean room', task: 'clean living room', completed: false },
{ name: 'wash dishes', task: 'wash dishesssssssssss', completed: true }]



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  toDoItems: ToDoItem[] = toDoItems;
  newName:string="";
  newTask:string="";


  constructor() {

    this.toDoItems = toDoItems
  }

  ngOnInit() {
  }


  create() {
 
    let toDoItem: ToDoItem = new ToDoItem(this.newName, this.newTask)

    this.toDoItems.push(toDoItem)

    this.newName='';
    this.newTask='';
  };


  togle(item: ToDoItem) {
    item.completed = !item.completed
  }
  delete(item) {
    let index = this.toDoItems.indexOf(item);
    if (index > -1) {
      this.toDoItems.splice(index, 1);
    }
  }

}
