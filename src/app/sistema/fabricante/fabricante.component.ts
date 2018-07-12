import { Component, OnInit } from '@angular/core';
import { Fabricante } from '../../core/model';
import { FabricanteService } from '../service/fabricante.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  fabricantes: Fabricante[];
  constructor(private fabricanteService: FabricanteService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.fabricanteService.pesquisar()
     .subscribe(response => this.fabricantes = response);
  }

}
