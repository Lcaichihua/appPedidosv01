import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   url ='http://localhost:8080/productos/nombre?nombre';
  constructor(private http:HttpClient ) {
    
   }

  findByLikeObject(nombre:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+'/by/nombre?nombre='+nombre)

  }
}
