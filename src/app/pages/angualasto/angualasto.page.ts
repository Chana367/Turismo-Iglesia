import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angualasto',
  templateUrl: './angualasto.page.html',
  styleUrls: ['./angualasto.page.scss'],
})
export class AngualastoPage implements OnInit {

  constructor() { }
  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];

  ngOnInit() {
  }

}
