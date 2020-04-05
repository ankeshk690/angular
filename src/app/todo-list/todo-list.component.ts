import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(public id:number,
    public name:String,
    public company:String,
    public TargetDate:Date
    )
  {
  

  }


}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 

  todos=[
    new Todo(20022136,"Ankesh","wipro",new Date()),
    new Todo(20022292,"Saumil","Accenture",new Date()),
    new Todo(20022104,"Abhimanyu","Ibm",new Date())

   
  ]


  constructor() { }


  

  ngOnInit(): void {
  }

}
