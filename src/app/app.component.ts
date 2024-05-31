import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  welcom = 'hola';
  tasks = [
    'Instalar el angular CLI',
    'Crear Proyecto',
    'crear Componente'
  ]

}
