import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {
  
  //Arreglo de categorias.json
  turismos: any = []; 


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTurismo().subscribe(res=>{console.log("Datos de turismo Angualasto ",res) //me suscribo a los datos del servidor/.json
    this.turismos = res;
    
  })
  }

    //obtengo datos del archivo.json
    getTurismo(){
      return this.http
      .get("assets/files/datos-angualasto.json")  
      .pipe(
        map((res:any)=>{
          return res.turismo;
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
