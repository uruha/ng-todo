import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';

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
    this.todoList = this.todoService.getTodo();
    this.todoForm = this.formBuilder.group({
      title: '',
      detail: ''
    });
  }

  ngOnInit() {}

  deleteTodo(todoId) {
    console.log(todoId);
    this.todoService.removeTodo(todoId);
    this.todoList = this.todoService.getTodo();
  }

  onSubmit(todo) {
    console.log('Your order has been submitted', todo);
    this.todoService.addTodo(todo);
    this.todoForm.reset();
    console.log(this.todoList);
  }
}
