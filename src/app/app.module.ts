import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosHComponent } from './componentes/empleados-h/empleados-h.component';
import { CaractEmpleadosComponent } from './componentes/caract-empleados/caract-empleados.component';
import { ServEmpleadosService } from './service/serv-empleados.service';
import { DataEmpServService } from './service/data-emp-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosHComponent,
    CaractEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServEmpleadosService,DataEmpServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
