import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.interface';

import {  updateTodoAction } from './store.actions';

export interface TodoListInterface {
    [index: number]: Todo;
  }

export var InitialList:TodoListInterface = [
    {
      id:1,
      name: 'Create app 1',
      description: 'blabla',
      checked: false,
      creationDate: new Date('December 11, 1995 03:24:00')
    },
    {
      id:2,
      name: 'Create app 2',
      description: 'blabla',
      checked: false,
      creationDate: new Date('December 11, 1995 03:24:00')
    },
    {
      id:3,
      name: 'Create app 3',
      description: 'blabla',
      checked: false,
      creationDate: new Date('December 11, 1995 03:24:00')
    }
  ];

  function updateTodo(store, todo){
    return store
  } 



  function sortList(list){
    if(list){
    // Set checked items above
      return list.sort((a:any, b:any) => b.creationDate - a.creationDate).sort((a:any, b:any) => (a.checked - b.checked))
    }
  }

  const _todoReducer = createReducer(sortList(InitialList),
    on(updateTodoAction, updateTodo),
  );

  export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }