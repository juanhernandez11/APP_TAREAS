import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'jrmb-app-tareas-jrmb',
  templateUrl: './tareas-jrmb.component.html',
  styleUrls: ['./tareas-jrmb.component.css']
})
export class TareasJrmbComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    // crear el objeto tarea
    const tarea : Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    // agregar el objeto tarea al array = listTareas
    this.listTareas.push(tarea);
    // resetear el form
    this.nombreTarea = '';
  }
  eliminarTarea(index: number): void {
    //console.log('A borrar' + index);
    this.listTareas.splice(index, 1);
  }

}
