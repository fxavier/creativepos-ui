import { Component, OnInit } from '@angular/core';
import { Fornecedor, Pais } from '../../core/model';
import { FornecedorService } from '../service/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];
  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.fornecedorService.pesquisar()
    .subscribe(response => {
      this.fornecedores = response;
      console.log(this.fornecedores);
    });
  }
}
