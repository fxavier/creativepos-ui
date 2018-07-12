import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto, Unidade, Fornecedor, Fabricante, Subcategoria } from '../../core/model';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})

export class ProdutosPesquisaComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.pesquisar();

  }

  pesquisar() {
    this.produtoService.pesquisar()
    .subscribe(response => this.produtos = response);
  }
}
