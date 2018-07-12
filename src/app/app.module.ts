import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SistemaModule } from './sistema/sistema.module';
import { GestaoStockModule } from './gestao-stock/gestao-stock.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SistemaModule,
    GestaoStockModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
