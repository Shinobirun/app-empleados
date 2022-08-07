import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServEmpleadosService } from './serv-empleados.service';
import { DataFireService } from './data-fire.service';



@Injectable({
  providedIn: 'root'
})
export class DataEmpServService {

  constructor(private servEmpleadosService: ServEmpleadosService, private dataFire: DataFireService) {}

  empleados:Empleado[]=[

    new Empleado("Adri","Lato","Director", 450000),
    new Empleado("Meli","Bere","Directora", 455000),
    new Empleado("Gonza","Monta","Programador", 250000),
    new Empleado("Gonza","Lato","Seguridad Informatica", 250000),
    new Empleado("Fede","Lato","Diseño Grafico", 250000),
    new Empleado("Santi","Lato","Ventas", 250000),


  ]

  agregarEmplServ(empleado:Empleado){

    this.empleados.push(empleado);
    this.dataFire.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];
    return empleado;

  }

  actualizarEmpleado(indice:number, empleado:Empleado) {

    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

  eliminarEmpleado(indice: number){

    this.empleados.splice(indice,1);

  }


}
