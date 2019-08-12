import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    return this.http
      .post<Todo>(
        'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo',
        todo
      )
      .pipe(tap(() => console.log('Your order has been submitted', todo)));
  }
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo'
    );
  }
  removeTodo(todoId): Observable<Todo> {
    return this.http.delete<Todo>(
      `https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo/${todoId}`
    );
  }
  clearTodo() {}
}
