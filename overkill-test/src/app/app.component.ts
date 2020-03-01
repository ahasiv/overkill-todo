import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos_list: any[];
  todoChecked: any[];
  selected: boolean;
  select_indeterminate: boolean;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos_list =  this.todoService.todos_list;
  }

  checkUncheckAll() {
    for (let value of Object.values(this.todos_list)) {
      value.checked = this.selected;
    }
  }

  isSelectedAll(){
    let checked_count = 0;
    this.todoChecked = [];
    //Get total checked items
    for (var i = 0; i < this.todos_list.length; i++) {
      if(this.todos_list[i].selected)
      checked_count++;
      this.todoChecked.push(this.todos_list[i]);

    }
  
    if(checked_count>0 && checked_count<this.todos_list.length){
      // If some checkboxes are checked but not all.
      this.select_indeterminate = true;
    }else if(checked_count == this.todos_list.length){
      //If checked count is equal to total items; then check the todo checkbox.
      this.selected = true;
    }else{
      //If none of the checkboxes in the list is checked then uncheck todo.
      this.selected = false;
    }

    if(this.todoChecked.length < this.todos_list.length) {
        for (var i = 0; i < this.todoChecked.length; i++) {
          this.todos_list[-1] = this.todoChecked[i];
        }
    }
  }

}
