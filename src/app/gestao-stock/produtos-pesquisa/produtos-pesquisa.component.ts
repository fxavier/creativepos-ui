import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto, Unidade, Fornecedor, Fabricante } from '../../core/model';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})

export class ProdutosPesquisaComponent implements OnInit {

  produtos: Produto[];
  produto = new Produto();

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit() {
    this.pesquisar();

  }

  pesquisar() {
    this.produtoService.pesquisar()
    .subscribe(response => this.produtos = response);
  }

  novo() {
    this.router.navigate(['/produtos/novo']);
  }

}
