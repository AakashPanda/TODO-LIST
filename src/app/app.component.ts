import { Component } from '@angular/core';

import { Todo } from "./todo";

@Component({                                                                      //Decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hii, I m Aakash Panda This is My first Angular JS Project ';

  // date = Date()
  // Name = 'It Works'


  // constructor(){
  //   console.log("It Called");
  //   this.doSomething("this is Aakash")
  // }

  // doSomething(val : string): void {
  //   val = "It was Awesome!";
  // }

  todoValue: string;
  list: Todo[];

  //Life Cycle Method

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo =
      {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.list.push(newItem);
    }

    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.list = this.list.filter
      (
        item => item.id !== id
      );
  }

}
