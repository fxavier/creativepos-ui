import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../service/unidade.service';
import { FormControl } from '@angular/forms';
import { Unidade } from '../../core/model';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {
  unidades: Unidade[];
  unidade = new Unidade();

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit() {
   this.pesquisar();
  }

  pesquisar() {
    this.unidadeService.pesquisar().subscribe(response => this.unidades = response);
  }

  adicionar(frm: FormControl) {
    this.unidadeService.adicionar(this.unidade)
        .subscribe(response => {
          frm.reset();
          this.pesquisar();
        });
  }

}
