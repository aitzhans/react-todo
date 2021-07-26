import { atom } from 'recoil';

export const todosState = atom({
  key: 'todos',
  default: [
    { title: 'Cook the breakfast', done: true, id: 1 },
    { title: 'Wash the dishes', done: false, id: 2 },
    { title: 'Write some code', done: false, id: 3 },
  ]
});

export const filteredTodosState = atom({
  key: 'filteredTodos',
  default: []
});

export const todosCount = atom({
  key: 'todosCount',
  default: 0
});

export const editedValue = atom({
  key: 'editedValue',
  default: null
});
