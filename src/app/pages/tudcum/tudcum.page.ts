import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tudcum',
  templateUrl: './tudcum.page.html',
  styleUrls: ['./tudcum.page.scss'],
})
export class TudcumPage implements OnInit {

  constructor() { }

  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];
  ngOnInit() {
  }

}
