import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GlobalesService } from 'src/app/services/globales.service';
@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.page.html',
  styleUrls: ['./hospedaje.page.scss'],
})
export class HospedajePage implements OnInit {
  //Arreglo de categorias.json
  hospedajes: any = [];
  textoBuscar=''; 
  favorito: any= [];
  constructor(private http: HttpClient, private router: Router,private storage:GlobalesService) { }

  async ngOnInit() {
    
    const favorito_storage = await this.storage.get('favorito_turismo_rodeo');
    
    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_rodeo', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
     
      this.favorito = favorito_storage;
    
    }
    this.getHospedaje().subscribe(res=>{console.log("Datos de hospedaje Rodeo ",res) //me suscribo a los datos del servidor/.json
    this.hospedajes = res;
    
  })
  }

  getHospedaje(){
    return this.http
    .get("assets/files/datos-rodeo.json")  
    .pipe(
      map((res:any)=>{
        return res.hospedaje;
      })
      )
  }

   //funcion que busca con el search bar
 buscar(event){
  //console.log(event);
  this.textoBuscar= event.detail.value;

  }

  favoritoEsta(x)
  {

   for(let i=0;i<this.favorito.length;i++){
   
    if(this.favorito[i].nombre==this.hospedajes[x].nombre){
     // console.log("es igual")
      return true
    }
   }
   return false
    // if(this.favorito.includes(x))
    // {
    //  // console.log("ESTA-----------------------");
    //   return true;
    // }
    // else{
    //   //console.log("NO ESTA-----------------------");
    //   return false;
    // }

  }
  obtenerIndice(x)
  {

   for(let i=0;i<this.favorito.length;i++){
   
    if(this.favorito[i].nombre==this.hospedajes[x].nombre){
     // console.log("es igual")
      return i;
    }
   }
   return -1;
    // if(this.favorito.includes(x))
    // {
    //  // console.log("ESTA-----------------------");
    //   return true;
    // }
    // else{
    //   //console.log("NO ESTA-----------------------");
    //   return false;
    // }

  }
  async favoritos(x){

    
    // this.global.favoritos(this.turismos[x],"rodeo");
    if(!this.favoritoEsta(x)){
      
      this.favorito.push(this.hospedajes[x])
      await this.storage.set('favorito_turismo_rodeo', this.favorito);
      console.log("Creo", this.storage.get('favorito_turismo_rodeo'))
  
    }else{
     
     let index=this.obtenerIndice(x);
      //let index=this.favorito.indexOf(this.turismos[x])
     this.favorito.splice(index, 1)
     await this.storage.set('favorito_turismo_rodeo', this.favorito);
     
     console.log("Saco", this.storage.get('favorito_turismo_rodeo'))

    }


  }
}
