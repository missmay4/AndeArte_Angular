import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoGaleriasComponent } from './listado-galerias/listado-galerias.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormularioGaleriasComponent } from './formulario-galerias/formulario-galerias.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreargaleriaComponent } from './creargaleria/creargaleria.component';
import { PerfiluserComponent } from './perfiluser/perfiluser.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListadoGaleriasComponent,
    BuscadorComponent,
    FormularioGaleriasComponent,
    ComentariosComponent,
    VistaDetalleComponent,
    CreargaleriaComponent,
    PerfiluserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
