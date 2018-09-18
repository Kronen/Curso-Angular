import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndraCoreModule } from '../indra-core';
import { ComprasModule } from './compras/compras.module';
import { FacturacionModule } from './facturacion/facturacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndraCoreModule,
    ComprasModule,
    FacturacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
