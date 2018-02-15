import { Component, OnInit } from '@angular/core';
import { Galeria } from '../galeria';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

/*      name: 'Magda Belloti', // nombre galeria index
       //photo: string, // url foto galeria index
       description: 'Fundada en 1980, Galería Magda Bellotti nace con el objetivo de dar a conocer el arte en el corazón de la capital española. Especializada en pinturas de los siglos XIX y XX.',
       //imagenes: string,
       direccion: 'Calle Fúcar nº22 28014 Madrid',
       horario: 'M-V 10:00-14:00 | 17:00-20:00 | S 10:00-14:00',
       telefono: 913693717,
       web: 'www.magdabellotti.com',
       email: 'galeriamagdabellotti@gmail.com' */

  constructor() { }

  ngOnInit() {
  }

}
