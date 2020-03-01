import { Component, OnInit } from '@angular/core';
import {Todo} from '../store/todo.interface';
import { Store } from '@ngrx/store';
import { updateTodoAction } from '../store/store.actions'


@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  my_todo_list: Array<Todo> ;
  selected: boolean = true;
  
  constructor(private store: Store<{ list: Array<Todo> }>) { 
    this.store.pipe().subscribe(attr => {
      this.my_todo_list = attr.list;
      console.log(this.my_todo_list);
    });

  }

  ngOnInit() {
  }
  isSelectedAll() {
    console.log('toto')
  }
  checkUncheckAll() {
    for (var i=0; i<this.my_todo_list.length;i++){
      this.my_todo_list[i].id = 20;
    }
  }

  updateTodo(todo:Todo) {
    if(todo){
      this.store.dispatch(updateTodoAction({todo}));
    }
  }

  sortList(list:Array<Todo>){
    if(list){
    // Set checked items above
      return list.sort((a:any, b:any) => b.creationDate - a.creationDate).sort((a:any, b:any) => (a.checked - b.checked))
    }
  }



}
