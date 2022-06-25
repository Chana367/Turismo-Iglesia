import { Component, OnInit } from '@angular/core';

import { GlobalesService } from 'src/app/services/globales.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(private storage:GlobalesService) { }
  //Arreglo de categorias.json
  textoBuscar='';
  favorito: any= [];

  async ngOnInit() {

    const favorito_storage = await this.storage.get('favorito_turismo_tudcum');

    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_tudcum', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
      this.favorito = favorito_storage;
    
    }
    
    console.log(this.favorito)
  
    
    // this.favorito.forEach((item)=>{
    // 	//pushes only unique element
    //   //   if(!this.favorito.includes(item)){
    // 	// 	this.favorito.splice(item,1)
    //   //   console.log("sssssssssss",this.favorito)
    // 	// }
    // })


    //   for(let i=0;i<this.favorito.length;i++)
    //  {
    //    if (this.favorito[i]==this.favorito[i++]){
    //        this.favorito.splice(this.favorito.indexOf(this.favorito[i]), 1);
    //       // delete this.favorito[i];
    //       //this.favorito = favorito_storage;
    //       console.log("se repite el ", this.favorito[i])
    //    }
    //  }
     
    
   
   // console.log(this.favorito)
    
    
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
      await this.storage.set('favorito_turismo_tudcum', this.favorito);
      console.log("Creo", this.storage.get('favorito_turismo_tudcum'))
  
    }else{
     
     let index=this.obtenerIndice(x);
      //let index=this.favorito.indexOf(this.turismos[x])
     this.favorito.splice(index, 1)
     await this.storage.set('favorito_turismo_tudcum', this.favorito);
     
     console.log("Saco", this.storage.get('favorito_turismo_tudcum'))

    }


  }

}
