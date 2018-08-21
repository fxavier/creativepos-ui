import { Component, OnInit } from '@angular/core';
import { Fabricante, Fornecedor } from '../../core/model';
import { FabricanteService } from '../../sistema/service/fabricante.service';
import { FornecedorService } from '../service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-pesquisa',
  templateUrl: './fornecedor-pesquisa.component.html',
  styleUrls: ['./fornecedor-pesquisa.component.css']
})
export class FornecedorPesquisaComponent implements OnInit {
  fornecedores: Fornecedor[];
  fornecedor = new Fornecedor();
  constructor(private fornecedorService: FornecedorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.pesquisar();
    const codigoFornecedor = this.route.snapshot.params['codigo'];
    if (codigoFornecedor) {
      this.carregarFornecedor(codigoFornecedor);
    }
  }

  novo() {
    this.router.navigate(['/fornecedores/novo']);
  }

  pesquisar() {
    this.fornecedorService.pesquisar()
    .subscribe(response => this.fornecedores = response);
  }

  carregarFornecedor(codigo: number) {
    this.fornecedorService.buscarPorCodigo(codigo)
    .subscribe(response => this.fornecedor = response);
  }

}
