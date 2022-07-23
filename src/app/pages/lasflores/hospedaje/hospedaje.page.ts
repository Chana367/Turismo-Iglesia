import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GlobalesService } from 'src/app/services/globales.service';
import { ToastController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.page.html',
  styleUrls: ['./hospedaje.page.scss'],
})
export class HospedajePage implements OnInit {
  //Arreglo de categorias.json
  hospedajes: any = []; 
  favorito: any = []; 
  constructor(private http: HttpClient, private router: Router,private storage:GlobalesService, private toastController: ToastController) { }

  async ngOnInit() {
    const favorito_storage = await this.storage.get('favorito_turismo_lasflores');
    
    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_lasflores', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
     
      this.favorito = favorito_storage;
    
    }
    this.getHospedaje().subscribe(res=>{console.log("Datos de hospedaje Las Flores ",res) //me suscribo a los datos del servidor/.json
    this.hospedajes = res;
    
  })
  }

  getHospedaje(){
    return this.http
    .get("assets/files/datos-lasflores.json")  
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
 favoritoEsta(x)
 {

  for(let i=0;i<this.favorito.length;i++){
  
   if(this.favorito[i].nombre==this.hospedajes[x].nombre){
    // console.log("es igual")
     return true
   }
  }
  return false

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


 }
 async favoritos(x){

   
   // this.global.favoritos(this.turismos[x],"rodeo");
   if(!this.favoritoEsta(x)){
     
     this.favorito.push(this.hospedajes[x])
     await this.storage.set('favorito_turismo_lasflores', this.favorito);
     console.log("Creo", this.storage.get('favorito_turismo_lasflores'))
     this.presentToast('Agregado a Favoritos')
   }else{
    
    let index=this.obtenerIndice(x);
     //let index=this.favorito.indexOf(this.turismos[x])
    this.favorito.splice(index, 1)
    await this.storage.set('favorito_turismo_lasflores', this.favorito);
    this.presentToast('Eliminado de Favoritos')
    console.log("Saco", this.storage.get('favorito_turismo_lasflores'))

   }


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
   
    if (this.num_lugares < this.hospedajes.length) {
      this.num_lugares++;
      event.target.complete();
   
    }else{
      this.infiniteScroll.disabled=true
      this.presentToast('No hay mas lugares')
    }
  }, 1000);
}
}