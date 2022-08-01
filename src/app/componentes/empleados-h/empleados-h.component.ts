import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados-h',
  templateUrl: './empleados-h.component.html',
  styleUrls: ['./empleados-h.component.css']
})
export class EmpleadosHComponent implements OnInit {


  @Input() empleadoH!:any;

  @Input() iH:number;


  constructor() { }

  ngOnInit(): void {
  }


  caracteristicas= [''];

  agregaCaract(nuevaCaracteristica: string) {
    this.caracteristicas.push(nuevaCaracteristica);
  }

}
