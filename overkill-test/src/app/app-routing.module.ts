import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoViewComponent} from "./todo-view/todo-view.component";
import { TodoDetailsComponent} from "./todo-details/todo-details.component";


const routes: Routes = [
  { path: '', component: TodoViewComponent },
  { path: 'details/:id', component: TodoDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
