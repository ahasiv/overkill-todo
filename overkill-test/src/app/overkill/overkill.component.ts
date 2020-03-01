import { Component, OnInit, Input} from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-overkill',
  templateUrl: './overkill.component.html',
  styleUrls: ['./overkill.component.scss']
})
export class OverkillComponent implements OnInit {

  @Input() todoName: string;
  @Input() todoIsSelected: boolean;
  @Input() todoId: number;
  @Input() index: number;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


  // getStatus() {
  //   return this.todoStatus;
  // }


}
