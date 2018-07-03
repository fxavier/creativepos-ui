import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Pais } from '../model/pais';
import { PaisService } from '../service/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises: Pais[];
  pais = new Pais();

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.paisService.pesquisar().then(paises => this.paises = paises);
  }

  salvar(form: FormControl) {
   this.paisService.adicionar(this.pais)
    .then();
   form.reset();
   this.pesquisar();
  }

}
