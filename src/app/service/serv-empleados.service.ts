import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }

}
