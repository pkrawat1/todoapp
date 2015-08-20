/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from "angular2/angular2";

@Component({
  selector: 'todo-app'
})

@View({
  template: `
    <h2>
      <ul>
        <li *ng-for="#todo of todos">
          {{ todo }}
        </li>
      </ul>

      <input #todotext (keyup)="doneTyping($event)">
      <button (click)="addTodo(todotext.value, $event)">Add Todo</button>
    </h2>
  `,
  directives: [NgFor, NgIf]
})

class TodoApp {
  todos: Array<string>;
  
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    console.log($event.which);
    
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(TodoApp);
