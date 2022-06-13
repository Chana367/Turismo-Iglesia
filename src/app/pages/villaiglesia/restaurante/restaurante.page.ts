import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  //Arreglo de categorias.json
  restaurantes: any = []; 
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getRestaurante().subscribe(res=>{console.log("Datos de restaurante Villa Iglesia ",res) //me suscribo a los datos del servidor/.json
    this.restaurantes = res;
    
  })
  }

  getRestaurante(){
    return this.http
    .get("assets/files/datos-villaiglesia.json")  
    .pipe(
      map((res:any)=>{
        return res.restaurante;
      })
      )
  }
  textoBuscar=''; 
  //funcion que busca con el search bar
buscar(event){
 //console.log(event);
 this.textoBuscar= event.detail.value;

 }
}
