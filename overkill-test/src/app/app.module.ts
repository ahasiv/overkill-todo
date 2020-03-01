import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/store.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({list: todoReducer})

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
