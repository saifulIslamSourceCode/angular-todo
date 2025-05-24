import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TodoItem {
  id: number,
  task: string,
  completed: boolean
}

@Component({
  selector: 'app-todo-main',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.scss'
})
export class TodoMainComponent {

    // todoList: TodoItem [] = [];
    // newTask: string = "";
    todoList = signal<TodoItem[]>([]);
    newTask = signal<string>('')

    //geting new task and assigned in newTodoItem
    addTask(): void {
      if(this.newTask() !== '') {
        const newTodoItem: TodoItem = {
          id: Date.now(),
          task: this.newTask(),
          completed: false
        }

        //add new added item in the todo list array
        this.todoList().push(newTodoItem);
        this.newTask.set('');
      }
    }

  //complete the todo item fn
  toggleCompleted(index: number): void {
    this.todoList()[index].completed = !this.todoList()[index].completed;
    // label.style.textDecoration = this.todoList[index].completed ? 'underline': 'none';

    // console.log(this.todoList[index])
    
  }

  //delete btn event
  deleteTask(index: number) {
    this.todoList().splice(index, 1); 
  }

}
