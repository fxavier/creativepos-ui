import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';

import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorPesquisaComponent } from './fornecedor-pesquisa/fornecedor-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    HttpClientModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,

    TabsModule.forRoot()

  ],
  declarations: [ProdutosPesquisaComponent,
                 ProdutosCadastroComponent,
                 FornecedorCadastroComponent,
                 FornecedorPesquisaComponent],
  exports: [ProdutosPesquisaComponent,
            ProdutosCadastroComponent,
            FornecedorCadastroComponent,
            FornecedorPesquisaComponent]
})
export class GestaoStockModule { }
