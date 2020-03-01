import { createAction, props} from '@ngrx/store';
import { Todo } from './todo.interface';


// export const addTodoAction = createAction('[Todo Component] add',
//     props<{ task: Todo; }>()
// );

// export const removeTodoAction = createAction('[Todo Component] remove',     
//     props<{ id: string; }>()
// );


export const updateTodoAction = createAction('[Todo Component] update',     
    props<{ todo: Todo; }>()
);