import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverkillComponent } from './overkill/overkill.component';
import { FormsModule } from '@angular/forms';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    OverkillComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
