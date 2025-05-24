import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoMainComponent } from './todo-main/todo-main.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
