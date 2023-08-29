import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   url ='http://localhost:8080/productos';
   
   //inyectando httpclient
  constructor(private http:HttpClient ) {
    
   }

  buscar(nombre:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+'/nombre?nombre='+nombre)
  }
  registrar(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url,producto)
  }
}
