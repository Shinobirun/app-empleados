import { Component, OnInit } from '@angular/core';
import {Output} from '@angular/core'
import { EventEmitter } from '@angular/core';
import { ServEmpleadosService } from 'src/app/service/serv-empleados.service';

@Component({
  selector: 'app-caract-empleados',
  templateUrl: './caract-empleados.component.html',
  styleUrls: ['./caract-empleados.component.css']
})
export class CaractEmpleadosComponent implements OnInit {
  @Output() caractEmpleado =new EventEmitter<string>();

  agregaCaract(value:string) {
    this.miServicio.muestraMensaje(value);
    this.caractEmpleado.emit(value);
  }

  constructor(private miServicio:ServEmpleadosService) { }

  ngOnInit(): void {
  }

}
