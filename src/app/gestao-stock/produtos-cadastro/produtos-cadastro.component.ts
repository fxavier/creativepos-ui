import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/model';
import { FabricanteService } from '../../sistema/service/fabricante.service';
import { CategoriaService } from '../../sistema/service/categoria.service';
import { UnidadeService } from '../../sistema/service/unidade.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  fabricantes = [];
  unidades = [];
  categorias = [];
  subcategorias = [];
  fornecedores = [];
  constructor(private fabricanteService: FabricanteService,
              private categoriaService: CategoriaService,
              private unidadeService: UnidadeService) { }

  ngOnInit() {
    this.carregarFabricante();
    this.carregarCategorias();
    this.carregarUnidade();
  }

  carregarFabricante() {
    this.fabricanteService.pesquisar()
    .subscribe(response => {
      this.fabricantes = response.map(f => ({ label: f.nome, value: f.codigo}));
    });
  }

  carregarCategorias() {
    this.categoriaService.pesquisar()
    .subscribe(response => {
      this.categorias = response.map(c => ({ label: c.nome, value: c.codigo}));
    });
  }

  carregarUnidade() {
    this.unidadeService.pesquisar()
    .subscribe(response => {
      this.unidades = response.map(u => ({ label: u.designacao, value: u.codigo }));
    });
  }
}

