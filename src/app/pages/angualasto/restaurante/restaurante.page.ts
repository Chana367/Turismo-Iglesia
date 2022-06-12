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
    this.getRestaurante().subscribe(res=>{console.log("Datos de restaurante Angualasto ",res) //me suscribo a los datos del servidor/.json
    this.restaurantes = res;
    
  })
  }

  getRestaurante(){
    return this.http
    .get("assets/files/datos-angualasto.json")  
    .pipe(
      map((res:any)=>{
        return res.restaurante;
      })
      )
  }
}