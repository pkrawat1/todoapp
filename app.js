/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var TodoApp = (function () {
    function TodoApp() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    TodoApp.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoApp.prototype.doneTyping = function ($event) {
        console.log($event.which);
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app'
        }),
        angular2_1.View({
            template: "\n    <h2>\n      <ul>\n        <li *ng-for=\"#todo of todos\">\n          {{ todo }}\n        </li>\n      </ul>\n\n      <input #todotext (keyup)=\"doneTyping($event)\">\n      <button (click)=\"addTodo(todotext.value, $event)\">Add Todo</button>\n    </h2>\n  ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
})();
angular2_1.bootstrap(TodoApp);
