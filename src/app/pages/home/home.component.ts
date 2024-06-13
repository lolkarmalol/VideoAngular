import { CommonModule } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, signal, input } from '@angular/core';

import { Task} from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false
    },

  ]);



  newTaskCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,

    ]
});

    changeHandler(){
      if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value.trim();
      if (value){
      this.addTask(value);
      this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);

  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position)=> position !== index ));

  }

  updateTask(index: number){
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{

        if(position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
    }

    // getCompletedTaskCount(): number {
    //   return this.tasks().filter(task => !task.completed).length;
    // }

    }


