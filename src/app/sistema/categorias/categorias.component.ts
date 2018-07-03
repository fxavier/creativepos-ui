import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];
  categoria = new Categoria();
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  salvar(form: FormControl) {
    this.categoriaService.adicionar(this.categoria)
        .then();
    form.reset();
    this.pesquisar();
  }

  pesquisar() {
    this.categoriaService.pesquisar()
    .then(categorias => this.categorias = categorias);
  }

}
