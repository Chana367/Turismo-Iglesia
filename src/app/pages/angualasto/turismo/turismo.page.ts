import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GlobalesService } from 'src/app/services/globales.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {
  
  //Arreglo de categorias.json
  turismos: any = []; 
  favorito: any = []; 

  constructor(private http: HttpClient, private router: Router,private storage:GlobalesService) { }

  async ngOnInit() {
    const favorito_storage = await this.storage.get('favorito_turismo_angualasto');
    
    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_angualasto', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
     
      this.favorito = favorito_storage;
    
    }
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

     favoritoEsta(x)
 {

  for(let i=0;i<this.favorito.length;i++){
  
   if(this.favorito[i].nombre==this.turismos[x].nombre){
    // console.log("es igual")
     return true
   }
  }
  return false

 }
 obtenerIndice(x)
 {

  for(let i=0;i<this.favorito.length;i++){
  
   if(this.favorito[i].nombre==this.turismos[x].nombre){
    // console.log("es igual")
     return i;
   }
  }
  return -1;


 }
 async favoritos(x){

   
   // this.global.favoritos(this.turismos[x],"rodeo");
   if(!this.favoritoEsta(x)){
     
     this.favorito.push(this.turismos[x])
     await this.storage.set('favorito_turismo_angualasto', this.favorito);
     console.log("Creo", this.storage.get('favorito_turismo_angualasto'))
 
   }else{
    
    let index=this.obtenerIndice(x);
     //let index=this.favorito.indexOf(this.turismos[x])
    this.favorito.splice(index, 1)
    await this.storage.set('favorito_turismo_angualasto', this.favorito);
    
    console.log("Saco", this.storage.get('favorito_turismo_angualasto'))

   }


 }


}
