import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataFireService {

  constructor(private httpClient: HttpClient) { }

  guardarEmpleados(empleados:Empleado[]){

    this.httpClient.post('https://appempleados-34fa2-default-rtdb.firebaseio.com',empleados).subscribe({
      next: (v) => console.log('Se han guardado los empleados ' + v),
      error: (e) => console.log('Error' + e),
    });

  }

}
