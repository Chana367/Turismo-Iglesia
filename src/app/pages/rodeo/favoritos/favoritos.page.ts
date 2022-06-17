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
  turismos: any = []; 
  textoBuscar='';
  favorito: any= [];l

  async ngOnInit() {

    const favorito_storage = await this.storage.get('favorito_turismo_rodeo');
    
    if((favorito_storage==null) || (favorito_storage.length==0)){
      
      console.log("Se ejecuta el if del ngOninit")
      await this.storage.set('favorito_turismo_rodeo', this.favorito);

    }else{
      console.log("Se ejecuta el else del ngOninit")
      this.favorito = favorito_storage;
    
    }

    
  }

}
