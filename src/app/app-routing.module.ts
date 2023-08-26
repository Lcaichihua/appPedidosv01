import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListadoComponent } from './components/productos/producto-listado/producto-listado.component';
import { ClienteListadoComponent } from './components/clientes/cliente-listado/cliente-listado.component';

const routes: Routes = [
  {path:'',component:ProductoListadoComponent},
  {path:'producto-listado',component:ProductoListadoComponent},
  {path:'cliente-listado',component:ClienteListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
