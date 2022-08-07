import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado.model';
import { ServEmpleadosService } from '../../service/serv-empleados.service';
import { DataEmpServService} from '../../service/data-emp-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Listado de empleados';

  constructor(private miServicio:ServEmpleadosService, private empleadoser:DataEmpServService){
    this.empleados=this.empleadoser.empleados;
    }

    cuadroNombre:String = "";
  cuadroApellido:String = "";
  cuadroCargo:String = "";
  cuadroSalario:Number = 0;
  empleados:Empleado[]=[];

  ngOnInit(): void {
  }

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadoser.agregarEmplServ(miEmpleado);


  }

}
