import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lasflores',
  templateUrl: './lasflores.page.html',
  styleUrls: ['./lasflores.page.scss'],
})
export class LasfloresPage implements OnInit {

  constructor() { }
  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];

  ngOnInit() {
  }

}
