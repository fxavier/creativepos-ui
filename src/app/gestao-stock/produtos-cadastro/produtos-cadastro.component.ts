import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/model';
import { FabricanteService } from '../../sistema/service/fabricante.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  fabricantes = [];
  constructor(private fabricanteService: FabricanteService) { }

  ngOnInit() {
    this.carregarFabricante();
  }

  carregarFabricante() {
    return this.fabricanteService.pesquisar()
    .subscribe(response => {
      this.fabricantes = response.map(f => {
        return { label: f.nome, value: f.codigo }
      })
    });
  }
}
