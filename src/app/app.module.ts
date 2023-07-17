import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListadoComponent } from './components/productos/producto-listado/producto-listado.component';
import { ProductoRegistroComponent } from './components/productos/producto-registro/producto-registro.component';
import { ClienteListadoComponent } from './components/clientes/cliente-listado/cliente-listado.component';
import { ClienteRegistroComponent } from './components/clientes/cliente-registro/cliente-registro.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListadoComponent,
    ProductoRegistroComponent,
    ClienteListadoComponent,
    ClienteRegistroComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
