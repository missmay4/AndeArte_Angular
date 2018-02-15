import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGaleriasComponent } from './listado-galerias/listado-galerias.component';
import { FormularioGaleriasComponent } from './formulario-galerias/formulario-galerias.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { PerfiluserComponent } from './perfiluser/perfiluser.component';
import { CreargaleriaComponent } from './creargaleria/creargaleria.component';
import { EditargaleriaComponent } from './editargaleria/editargaleria.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado-galerias', pathMatch: 'full'},
  { path: 'listado-galerias', component: ListadoGaleriasComponent },
  { path: 'formulario-galerias', component: FormularioGaleriasComponent },
  { path: 'vista-detalle', component: VistaDetalleComponent},
  { path: 'perfiluser', component: PerfiluserComponent },
  { path: 'creargaleria', component: CreargaleriaComponent },
  { path: 'editargaleria', component: EditargaleriaComponent },

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
