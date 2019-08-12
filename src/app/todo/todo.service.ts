import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id?: number;
  title: string;
  detail: string;
}
@Injectable()
export class TodoService {
  todoList: Todo[];

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    // this.todoList.push(todo);
    return this.http.post<Todo>(
      'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo',
      todo
    );
  }
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo'
    );
  }
  removeTodo(todoId) {
    this.todoList = this.todoList.filter((_, index) => index !== todoId);
  }
  clearTodo() {}
}
