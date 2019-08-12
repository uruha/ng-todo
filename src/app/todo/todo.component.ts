import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  todoForm;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      title: '',
      detail: ''
    });
  }

  ngOnInit() {
    this.getTodolist();
  }

  getTodolist() {
    this.todoService
      .getTodo()
      .subscribe(data => (this.todoList = data.reverse()));
  }

  deleteTodo(todoId) {
    this.todoService.removeTodo(todoId);
    this.getTodolist();
  }

  onSubmit(todo) {
    console.log('Your order has been submitted', todo);
    this.todoService.addTodo(todo).subscribe(() => {
      this.getTodolist();
    });
    this.todoForm.reset();
  }
}
