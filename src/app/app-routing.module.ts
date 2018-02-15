import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGaleriasComponent } from './listado-galerias/listado-galerias.component';
import { FormularioGaleriasComponent } from './formulario-galerias/formulario-galerias.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado-galerias', pathMatch: 'full'},
  { path: 'listado-galerias', component: ListadoGaleriasComponent },
  { path: 'formulario-galerias', component: FormularioGaleriasComponent },
  { path: 'vista-detalle', component: VistaDetalleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
