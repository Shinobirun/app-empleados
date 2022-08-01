import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServEmpleadosService } from './service/serv-empleados.service';
import { DataEmpServService} from './service/data-emp-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  constructor(private miServicio:ServEmpleadosService, private empleadoser:DataEmpServService){
  this.empleados=this.empleadoser.empleados;
  }


  cuadroNombre:String = "";
  cuadroApellido:String = "";
  cuadroCargo:String = "";
  cuadroSalario:Number = 0;
  empleados:Empleado[]=[];
/*
  empleados:Empleado[]=[

    new Empleado("Adri","Lato","Director", 450000),
    new Empleado("Meli","Bere","Directora", 455000),
    new Empleado("Gonza","Monta","Programador", 250000),
    new Empleado("Gonza","Lato","Seguridad Informatica", 250000),
    new Empleado("Fede","Lato","Diseño Grafico", 250000),
    new Empleado("Santi","Lato","Ventas", 250000),


  ];*/

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadoser.agregarEmplServ(miEmpleado);


  }



}
