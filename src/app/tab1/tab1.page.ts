import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  localidades: any = []; //Arreglo de los videos
  
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.getLocalidades().subscribe(res=>{console.log("RES  ",res) //me suscribo a los datos del servidor/.json
    this.localidades = res;
    
  })
    
  }
  

  //obtengo datos del archivo.json
  getLocalidades(){
  return this.http
  .get("assets/files/localidades.json")  
  .pipe(
    map((res:any)=>{
      return res.data;
    })
    )
  }
}
