import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage-angular';
import { GlobalesService } from 'src/app/services/globales.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {
  
  //Arreglo de categorias.json
  turismos: any = []; 
  textoBuscar='';
  favorito: any= [];l

  constructor(private http: HttpClient, private router: Router,private storage:GlobalesService) { }

  async ngOnInit() {
    //await this.storage.create();
    // const favorito_storage = await this.storage.get('favorito_turismo_rodeo');
    
    // if((favorito_storage==null) || (favorito_storage.length==0)){
      
    //   console.log("Se ejecuta el if del ngOninit")
    //   await this.storage.set('favorito_turismo_rodeo', this.favorito);

    // }else{
    //   console.log("Se ejecuta el else del ngOninit")
    //   this.favorito = favorito_storage;
    
    // }

    const favorito_storage = await this.storage.get('favorito_turismo_rodeo');
    
    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_rodeo', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
      this.favorito = favorito_storage;
    
    }

    // this.global.crear();
    // console.log("'''''''''''''''''''''''''''''''");
    // this.global.inicio("rodeo");
    this.getTurismo().subscribe(res=>{console.log("Datos de turismo Rodeo ",res) //me suscribo a los datos del servidor/.json
    this.turismos = res;
    
  })
  }

    //obtengo datos del archivo.json
    getTurismo(){
      return this.http
      .get("assets/files/datos-rodeo.json")  
      .pipe(
        map((res:any)=>{
          return res.turismo;
        })
        )
      }

      async favoritoEsta(x)
      {
        console.log(x);
        if(this.favorito.includes(x))
        {
         // console.log("ESTA-----------------------");
          return true;
        }
        else{
          //console.log("NO ESTA-----------------------");
          return false;
        }
        
      }
      async favoritos(x){

        
        // this.global.favoritos(this.turismos[x],"rodeo");
        if(!this.favorito.includes(this.turismos[x])){
          this.favorito.push(this.turismos[x])
          await this.storage.set('favorito_turismo_rodeo', this.favorito);
          console.log("Creo", this.storage.get('favorito_turismo_rodeo'))
      
        }else if(this.favorito.includes(this.turismos[x])){
         let index=this.favorito.indexOf(this.turismos[x])
         this.favorito.splice(index, 1)
         await this.storage.set('favorito_turismo_rodeo', this.favorito);
         console.log("Saco", this.storage.get('favorito_turismo_rodeo'))

        
        }
    
      }
 //funcion que busca con el search bar
 buscar(event){
  //console.log(event);
  this.textoBuscar= event.detail.value;

  }

}
