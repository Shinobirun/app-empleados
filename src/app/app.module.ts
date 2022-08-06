import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosHComponent } from './componentes/empleados-h/empleados-h.component';
import { CaractEmpleadosComponent } from './componentes/caract-empleados/caract-empleados.component';
import { ServEmpleadosService } from './service/serv-empleados.service';
import { DataEmpServService } from './service/data-emp-serv.service';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {path:'', component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'quienes',component:QuienesSomosComponent},
  {path:'contacto',component:ContactoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosHComponent,
    CaractEmpleadosComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServEmpleadosService,DataEmpServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
