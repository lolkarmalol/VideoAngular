import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

    title = 'todo-app';
    welcom = 'hola';
    tasks = signal([
      'Instalar el angular CLI',
      'Crear Proyecto',
      'crear Componente',
      'Crear servicio'
    ]);

    name= signal('Jodier');
    age= '23';
    disabled=true;
    img = 'https://i.pinimg.com/280x280_RS/ab/8d/84/ab8d84f4ad03d943aeff955efb397e42.jpg';

    person={
      name:'Jodier',
      age: '23',
      avatar:'https://i.pinimg.com/280x280_RS/ab/8d/84/ab8d84f4ad03d943aeff955efb397e42.jpg'
    }

    clickHandler(){
      alert('Hola')
    }

    changeHandler(event: Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.name.set(newValue);
    }

    keydowndHandler(event: KeyboardEvent){
      const input = event.target as HTMLInputElement;
      console.log(input.value);

    }





  }
