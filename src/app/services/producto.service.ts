import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   url ='http://localhost:8080/productos/nombre?nombre';
  constructor(private http:HttpClient ) {
    
   }

  findByLikeObject(nombre:string){
    this.http.get(this.url+'/by/nombre?nombre='+nombre)

  }
}
