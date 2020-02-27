import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overkill',
  templateUrl: './overkill.component.html',
  styleUrls: ['./overkill.component.scss']
})
export class OverkillComponent implements OnInit {

  @Input() todoName: string;
  @Input() todoStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.todoStatus;
  }

  onChecked(obj: any, isChecked: boolean){
    console.log(obj, isChecked); // {}, true || false
  }

}
