import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListadoComponent } from './components/productos/producto-listado/producto-listado.component';
import { ClienteListadoComponent } from './components/clientes/cliente-listado/cliente-listado.component';
import { ProductoRegistroComponent } from './components/productos/producto-registro/producto-registro.component';

const routes: Routes = [
  {path:'',component:ProductoListadoComponent},
  {path:'producto-listado',component:ProductoListadoComponent},
  {path:'producto-registro',component:ProductoRegistroComponent},
  {path:'cliente-listado',component:ClienteListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
