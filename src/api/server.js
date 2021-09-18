// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';
import { nanoid } from '@reduxjs/toolkit';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/todos', () => ([
      {
        title: 'Cook the breakfast', done: true, id: 1, isEdited: false,
      },
      {
        title: 'Wash the dishes', done: false, id: 2, isEdited: false,
      },
      {
        title: 'Write some code', done: false, id: 3, isEdited: false,
      },
    ]
    ));

    this.post('/todos', (schema, request) => {
      const title = JSON.parse(request.requestBody);
      const newTodo = {
        id: nanoid(), title, isEdited: false, done: false
      };
      return newTodo;
    });

    this.delete('/todos/:id', (schema, request) => {
      const { id } = request.params;
      return schema.todos.find(id).destroy();
    });
  }
});
