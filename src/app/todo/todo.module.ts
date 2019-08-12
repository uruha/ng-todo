import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, ReactiveFormsModule, TodoRoutingModule]
})
export class TodoModule {}
