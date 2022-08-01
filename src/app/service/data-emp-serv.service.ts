import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';


@Injectable({
  providedIn: 'root'
})
export class DataEmpServService {

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
  }

  constructor() { }
}
