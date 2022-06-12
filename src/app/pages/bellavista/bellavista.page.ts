import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bellavista',
  templateUrl: './bellavista.page.html',
  styleUrls: ['./bellavista.page.scss'],
})
export class BellavistaPage implements OnInit {

  constructor() { }
  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];

  ngOnInit() {
  }

}
