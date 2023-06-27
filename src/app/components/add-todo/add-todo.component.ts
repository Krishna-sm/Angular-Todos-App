import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string='';
  desc:string='';


  @Output() AddTodoEvent:EventEmitter<Todo>= new EventEmitter();

  onSubmitForm(){
   const todo ={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
   }
   this.AddTodoEvent.emit(todo);
  }
}
