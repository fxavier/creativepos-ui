import { Component, OnInit } from '@angular/core';
import { MoedaService } from '../service/moeda.service';
import { Moeda } from '../../core/model';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent implements OnInit {

  moedas: Moeda[];
  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.moedaService.pesquisar()
     .subscribe(response => {
        this.moedas = response;
        console.log(this.moedas);
     });
  }

}
