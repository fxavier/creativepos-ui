import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


import { MoedaService } from '../service/moeda.service';
import { Moeda } from '../../core/model';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent implements OnInit {

  moedas: Moeda[];
  moeda = new Moeda();
  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  salvar(form: FormControl) {
    this.moedaService.adicionar(this.moeda)
     .subscribe(response => {
      form.reset();
      this.pesquisar();
     });
  }

  pesquisar() {
    this.moedaService.pesquisar()
     .subscribe(response => {
        this.moedas = response;
        console.log(this.moedas);
     });
  }

}
