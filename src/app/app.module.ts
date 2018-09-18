import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndraCoreModule } from '../indra-core';

import { AppComponent } from './app.component';
import { ComprasModule } from './compras/compras.module';
import { FacturacionModule } from './facturacion/facturacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    IndraCoreModule,
    ComprasModule, FacturacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
