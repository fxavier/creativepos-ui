import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Fabricante } from '../../core/model';
import { FabricanteService } from '../service/fabricante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  fabricantes: Fabricante[];
  fabricante = new Fabricante();
  constructor(private fabricanteService: FabricanteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pesquisar();
    const codigoFabricante = this.route.snapshot.params['codigo'];
    if (codigoFabricante) {
      this.carregarFabricante(codigoFabricante);
    }
  }

  carregarFabricante(codigo: number) {
    this.fabricanteService.buscarPorCodigo(codigo)
     .subscribe(response => this.fabricante = response);
  }

  salvar(form: FormControl) {
    this.fabricanteService.adicionar(this.fabricante)
     .subscribe(response => {
       form.reset();
       this.pesquisar();
     });
  }

  pesquisar() {
    this.fabricanteService.pesquisar()
     .subscribe(response => this.fabricantes = response);
  }

}
