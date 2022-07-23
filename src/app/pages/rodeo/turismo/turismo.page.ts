import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage-angular';
import { GlobalesService } from 'src/app/services/globales.service';
import { ToastController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {
  
  //Arreglo de categorias.json
  turismos: any = []; 
  textoBuscar='';
  favorito: any= [];

  constructor(private http: HttpClient, private router: Router,private storage:GlobalesService, private toastController: ToastController) { }

  async ngOnInit() {


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

       favoritoEsta(x)
      {

       for(let i=0;i<this.favorito.length;i++){
       
        if(this.favorito[i].nombre==this.turismos[x].nombre){
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
       
        if(this.favorito[i].nombre==this.turismos[x].nombre){
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
          
          this.favorito.push(this.turismos[x])
          await this.storage.set('favorito_turismo_rodeo', this.favorito);
          console.log("Creo", this.storage.get('favorito_turismo_rodeo'))
          this.presentToast('Agregado a Favoritos')
        }else{
         
         let index=this.obtenerIndice(x);
          //let index=this.favorito.indexOf(this.turismos[x])
         this.favorito.splice(index, 1)
         await this.storage.set('favorito_turismo_rodeo', this.favorito);
         this.presentToast('Eliminado de Favoritos')
         console.log("Saco", this.storage.get('favorito_turismo_rodeo'))

        }

    
      }
 //funcion que busca con el search bar
 buscar(event){
  //console.log(event);
  this.textoBuscar= event.detail.value;

  }
  async presentToast( message:string ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  abrir: any= [];
  abrirCard(i){
    if(this.abrir[i]==null){
      this.abrir[i]=false
    }
    if(this.abrir[i]==false){
      this.abrir[i]=true
    }else{
      this.abrir[i]=false
    }

  }



  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  num_lugares: number=90;
  mostrarLugares(event) {
    setTimeout(() => {
     
      if (this.num_lugares < this.turismos.length) {
        this.num_lugares++;
        event.target.complete();
     
      }else{
        this.infiniteScroll.disabled=true
        this.presentToast('No hay mas lugares')
      }
    }, 1000);
  }


}
