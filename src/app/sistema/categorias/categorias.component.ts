import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../../core/model';

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
       .subscribe(response => {
         form.reset();
         this.pesquisar();
       });
  }

  pesquisar() {
    this.categoriaService.pesquisar()
    .subscribe(response => {
      this.categorias = response;
      console.log(this.categorias);
    });
  }

}
