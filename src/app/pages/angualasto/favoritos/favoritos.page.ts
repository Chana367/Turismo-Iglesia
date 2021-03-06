import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalesService } from 'src/app/services/globales.service';
import { ToastController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(private storage:GlobalesService, private toastController: ToastController) { }
  textoBuscar='';
  favorito: any= [];
  async ngOnInit() {
    const favorito_storage = await this.storage.get('favorito_turismo_angualasto');

    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_angualasto', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
      this.favorito = favorito_storage;
    
    }

  }


  favoritoEsta(x)
  {

   for(let i=0;i<this.favorito.length;i++){
   
    if(this.favorito[i].nombre==this.favorito[x].nombre){
     // console.log("es igual")
      return true
    }
   }
   return false

  }
  obtenerIndice(x)
  {

   for(let i=0;i<this.favorito.length;i++){
   
    if(this.favorito[i].nombre==this.favorito[x].nombre){
     // console.log("es igual")
      return i;
    }
   }
   return -1;
  

  }
  async favoritos(x){

    
    // this.global.favoritos(this.turismos[x],"rodeo");
    if(!this.favoritoEsta(x)){
      
      this.favorito.push(this.favorito[x])
      await this.storage.set('favorito_turismo_angualasto', this.favorito);
      console.log("Creo", this.storage.get('favorito_turismo_angualasto'))
      this.presentToast('Agregado a Favoritos')
    }else{
     
     let index=this.obtenerIndice(x);
      //let index=this.favorito.indexOf(this.turismos[x])
     this.favorito.splice(index, 1)
     await this.storage.set('favorito_turismo_angualasto', this.favorito);
     this.presentToast('Eliminado de Favoritos')
     console.log("Saco", this.storage.get('favorito_turismo_angualasto'))

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
     
      if (this.num_lugares < this.favorito.length) {
        this.num_lugares++;
        event.target.complete();
     
      }else{
        this.infiniteScroll.disabled=true
        this.presentToast('No hay mas lugares')
      }
    }, 1000);
  }
}
