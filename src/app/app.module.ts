import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { ProductoRegistradoComponent } from './components/producto-registrado/producto-registrado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListadoComponent,
    ProductoRegistradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
