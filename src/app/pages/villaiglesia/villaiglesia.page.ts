import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villaiglesia',
  templateUrl: './villaiglesia.page.html',
  styleUrls: ['./villaiglesia.page.scss'],
})
export class VillaiglesiaPage implements OnInit {

  constructor() { }

  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];
  ngOnInit() {
  }

}
