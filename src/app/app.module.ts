import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndraCoreModule, ERROR_LEVEL, LoggerService } from '../indra-core';

import { AppComponent } from './app.component';
import { ComprasModule } from './compras/compras.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DemosComponent
    ],
    imports: [
        BrowserModule, FormsModule,
        IndraCoreModule,
        ComprasModule, FacturacionModule,
    ],
    providers: [
        LoggerService,
        { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
