import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rodeo',
  templateUrl: './rodeo.page.html',
  styleUrls: ['./rodeo.page.scss'],
})
export class RodeoPage implements OnInit {

  public categorias = [
    { nombre: 'Turismo' , img: "turismo.jpg", src:"turismo" },
    { nombre: 'Hospedaje' , img: "hospedaje.jpg", src:"hospedaje"  },
    { nombre: 'Restaurantes' , img: "restaurante.jpg", src:"restaurante"  }
  ];

  constructor() { }
 
  ngOnInit() {
  }


}
