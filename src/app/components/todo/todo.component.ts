import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();
  @Input()
  i?: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoStrike: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onClick(name: Todo) {
    this.todoDelete.emit(name);
  }
  onCheckBoxClick(todo: Todo) {
    this.todoStrike.emit(todo);
  }
}
