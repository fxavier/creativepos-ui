import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SistemaModule } from './sistema/sistema.module';
import { GestaoStockModule } from './gestao-stock/gestao-stock.module';
import { BancoComponent } from './sistema/banco/banco.component';
import { BrowserModule } from '@angular/platform-browser';
import { PaisComponent } from './sistema/pais/pais.component';
import { MoedaComponent } from './sistema/moeda/moeda.component';
import { FabricanteComponent } from './sistema/fabricante/fabricante.component';
import { CategoriasComponent } from './sistema/categorias/categorias.component';
import { UnidadeComponent } from './sistema/unidade/unidade.component';
import { ProdutosPesquisaComponent } from './gestao-stock/produtos-pesquisa/produtos-pesquisa.component';
import { ProdutosCadastroComponent } from './gestao-stock/produtos-cadastro/produtos-cadastro.component';
import { FornecedorPesquisaComponent } from './gestao-stock/fornecedor-pesquisa/fornecedor-pesquisa.component';
import { FornecedorCadastroComponent } from './gestao-stock/fornecedor-cadastro/fornecedor-cadastro.component';

const routes: Routes = [
 { path: 'bancos', component: BancoComponent },
 { path: 'paises', component: PaisComponent },
 { path: 'moedas', component: MoedaComponent},
 { path: 'fabricantes', component: FabricanteComponent },
 { path: 'fabricantes/:codigo', component: FabricanteComponent },
 { path: 'categorias', component: CategoriasComponent},
 { path: 'unidades', component: UnidadeComponent },

 { path: 'produtos', component: ProdutosPesquisaComponent},
 { path: 'produtos/novo', component: ProdutosCadastroComponent},
 { path: 'fornecedores', component: FornecedorPesquisaComponent},
 { path: 'fornecedores/novo', component: FornecedorCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),

    SistemaModule,
    GestaoStockModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
