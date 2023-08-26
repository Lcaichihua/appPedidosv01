import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {

  productos:Array<Producto>=[];  
  constructor(private productoService : ProductoService) { 

  }

  ngOnInit(): void {
  this.buscar()
  }
  buscar(){
this.productoService.buscar('').subscribe(
  {
    next:(res)=>{
      this.productos=res;
      console.log(res)
    },
    error:()=>{
      console.log('Error al listar productos')
    }
  }
)
  }
}
