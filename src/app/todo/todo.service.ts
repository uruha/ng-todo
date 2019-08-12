import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todoList = [
    {
      title: 'Hello Todo 😎',
      detail: 'create todo list'
    }
  ];

  constructor() {}

  addTodo(todo) {
    this.todoList.push(todo);
  }
  getTodo() {
    return this.todoList;
  }
  removeTodo(todoId) {
    this.todoList = this.todoList.filter((_, index) => index !== todoId);
  }
  clearTodo() {}
}
