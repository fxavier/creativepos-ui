/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Primeng imports */
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

/** My App imports */
import { PaisComponent } from './pais/pais.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { BancoComponent } from './banco/banco.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [PaisComponent, CategoriasComponent, BancoComponent],
  exports: [PaisComponent, CategoriasComponent, BancoComponent]
})
export class SistemaModule { }
