import { Component, OnInit } from '@angular/core';
import { Banco } from '../model/banco';
import { BancoService } from '../service/banco.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos: Banco[];
  banco = new Banco();
  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  salvar(form: FormControl) {
    this.bancoService.adicionar(this.banco)
        .then();
    form.reset();
    this.pesquisar();
  }

  pesquisar() {
    this.bancoService.pesquisar()
    .then(bancos => this.bancos = bancos);
  }

}
