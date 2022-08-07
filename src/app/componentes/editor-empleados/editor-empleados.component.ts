import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { DataEmpServService } from 'src/app/service/data-emp-serv.service';
import { ServEmpleadosService } from 'src/app/service/serv-empleados.service';

@Component({
  selector: 'app-editor-empleados',
  templateUrl: './editor-empleados.component.html',
  styleUrls: ['./editor-empleados.component.css']
})
export class EditorEmpleadosComponent implements OnInit {

  constructor(private router: Router,private miServicio:ServEmpleadosService, private empleadoser:DataEmpServService ) {

  }
  cuadroNombre:String = "";
  cuadroApellido:String = "";
  cuadroCargo:String = "";
  cuadroSalario:Number = 0;
  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados=this.empleadoser.empleados;
  }

  volverHome(){

    this.router.navigate(['']);

  }
  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadoser.agregarEmplServ(miEmpleado);
    this.router.navigate(['']);


  }

}
