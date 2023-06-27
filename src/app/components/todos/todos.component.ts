import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  implements OnInit {
  todos:Todo[] =[];
  localitem:string|null ;
  constructor(){
    this.localitem = localStorage.getItem("todos");
    // if(localStorage.getItem(""))
    if(this.localitem === null)
    {

      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localitem);
    }
    // this.todos=[
    //   {
    //     sno:3,
    //     title:"This is Title",
    //     desc:"Description",
    //     active:true
    //   },
    //   {
    //     sno:4,
    //     title:"This is Title2",
    //     desc:"Description is very good",
    //     active:true
    //   },
    //   {
    //     sno:5,
    //     title:"This is Title3",
    //     desc:"Description is very nice",
    //     active:true
    //   }
    // ]
  };
    ngOnInit(): void {
        
    }

    todoDelete(todo:Todo){
        const index = this.todos.indexOf(todo);
       this.todos.splice(index,1);
       localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    addTodo(todo:Todo){
// console.log(todo);
this.todos.push(todo);
localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    toggleTodo(todo:Todo){
      const index = this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active;
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    
}

