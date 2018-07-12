import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    HttpClientModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    DropdownModule

  ],
  declarations: [ProdutosPesquisaComponent, FornecedorComponent, ProdutosCadastroComponent],
  exports: [ProdutosPesquisaComponent, FornecedorComponent, ProdutosCadastroComponent]
})
export class GestaoStockModule { }
