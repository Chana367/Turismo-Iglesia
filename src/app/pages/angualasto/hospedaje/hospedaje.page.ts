import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.page.html',
  styleUrls: ['./hospedaje.page.scss'],
})
export class HospedajePage implements OnInit {
  //Arreglo de categorias.json
  hospedajes: any = []; 
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getHospedaje().subscribe(res=>{console.log("Datos de hospedaje Angualasto ",res) //me suscribo a los datos del servidor/.json
    this.hospedajes = res;
    
  })
  }

  getHospedaje(){
    return this.http
    .get("assets/files/datos-angualasto.json")  
    .pipe(
      map((res:any)=>{
        return res.hospedaje;
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