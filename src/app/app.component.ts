import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Krishna Website';
 constructor(){
  setTimeout(()=>{
    this.title="My App";
  },5000)
 }
}
