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

  constructor() { }

  ngOnInit() {
  }

}
