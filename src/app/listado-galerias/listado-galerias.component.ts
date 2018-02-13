import { Component, OnInit } from '@angular/core';
import { Galeria } from '../galeria'; // importar la clase que está en galeria.ts 

@Component({
  selector: 'app-listado-galerias',
  templateUrl: './listado-galerias.component.html',
  styleUrls: ['./listado-galerias.component.css']
})
export class ListadoGaleriasComponent implements OnInit {

  galerias_cercanas: Galeria[] = [
    { name: 'Magda Bellotti', photo: 'assets/img/galeriamagdamadrid.jpg' }, // Datos galerias index, por orden
    { name: 'Bacelos', photo: 'assets/img/galeriabacelosmadrid.jpg'},
    { name: 'Art Sage', photo: 'assets/img/fotogaleria.jpg'},
    { name: 'Arde Arte', photo: 'assets/img/ardearte.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
