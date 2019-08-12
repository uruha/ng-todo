import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList;
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
    this.todoList = this.todoService.getTodo();
  }

  deleteTodo(todoId) {
    this.todoService.removeTodo(todoId);
    this.getTodolist();
  }

  onSubmit(todo) {
    console.log('Your order has been submitted', todo);
    this.todoService.addTodo(todo);
    this.todoForm.reset();
  }
}
