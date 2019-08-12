import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [TodoService]
})
export class TodoModule {}
