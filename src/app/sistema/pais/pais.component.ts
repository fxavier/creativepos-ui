import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


import { PaisService } from '../service/pais.service';
import { Pais } from '../../core/model';

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
    this.paisService.pesquisar()
    .subscribe(response => this.paises = response);
  }

  salvar(form: FormControl) {
   this.paisService.adicionar(this.pais)
     .subscribe(response => {
       form.reset();
       this.pesquisar();
     });

  }

}
