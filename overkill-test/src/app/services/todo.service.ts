export class TodoService {
  selected = false;
  todoChecked: any[];
  select_indeterminate = false;

  todos_list = [
    {
      id:1,
      name: 'Create app 1',
      checked: false,
      disable: false
    },
    {
      id:2,
      name: 'Create app 2',
      checked: false,
      disable: false

    },
    {
      id:3,
      name: 'Create app 3',
      checked: false,
      disable: false
    }
  ];




}