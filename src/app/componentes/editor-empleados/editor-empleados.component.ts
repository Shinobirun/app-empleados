import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { DataEmpServService } from 'src/app/service/data-emp-serv.service';
import { ServEmpleadosService } from 'src/app/service/serv-empleados.service';

@Component({
  selector: 'app-editor-empleados',
  templateUrl: './editor-empleados.component.html',
  styleUrls: ['./editor-empleados.component.css']
})
export class EditorEmpleadosComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router,private miServicio:ServEmpleadosService, private empleadoser:DataEmpServService, private route:ActivatedRoute)  {

  }

  empleados:Empleado[]=[];


  ngOnInit(): void {
    this.empleados=this.empleadoser.empleados;
    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadoser.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

  }

  volverHome(){

    this.router.navigate(['']);

  }
  actualizaEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadoser.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);


  }
  cuadroNombre:String = "";
  cuadroApellido:String = "";
  cuadroCargo:String = "";
  cuadroSalario:Number = 0;
  indice:number = 0;

}
