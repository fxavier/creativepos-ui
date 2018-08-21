import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../core/model';
import { PaisService } from '../../sistema/service/pais.service';
import { MoedaService } from '../../sistema/service/moeda.service';
import { BancoService } from '../../sistema/service/banco.service';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css']
})
export class FornecedorCadastroComponent implements OnInit {

  fornecedor = new Fornecedor();
  paises = [];
  moedas = [];
  bancos = [];
  constructor(private paisService: PaisService,
              private moedaService: MoedaService,
              private bancoService: BancoService) { }

  ngOnInit() {
    this.carregarPaises();
    this.carregarMoedas();
    this.carregarBancos();
  }

  carregarPaises() {
    this.paisService.pesquisar()
    .subscribe(response => {
      this.paises = response.map(p => ({label: p.nome, value: p.codigo}));
    });
  }

  carregarMoedas() {
    this.moedaService.pesquisar()
    .subscribe(response => {
      this.moedas = response.map(m => ({label: m.designacao, value: m.codigo}));
    });
  }

  carregarBancos() {
   this.bancoService.pesquisar()
   .subscribe(response => {
     this.bancos = response.map(b => ({label: b.nome, value: b.codigo}));
   });
  }

}
