import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLSearchParams, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Produto, Categoria } from '../../core/model';
import { ErrorHandlerService } from '../../core/service/error-handler.service';
import { CategoriaService } from '../../sistema/service/categoria.service';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoUrl = 'http://localhost:8080';
  subcategoriaUrl = 'http://localhost:8080/subcategorias';
  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient,
              private errorHandlerService: ErrorHandlerService,
              private categoriaService: CategoriaService) { }

  pesquisar(): Observable<Produto[]> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.get<Produto[]>(`${this.produtoUrl}/produtos`, { headers })
       .pipe(map(response => response));
  }

  listarCategoria(): Observable<Categoria[]> {
    return this.categoriaService.pesquisar();
  }




  /**
   * Handle Http operation that failed
   * Let the app continue.
   * @param operation -name of the operation that failed
   * @param result - optional value to return as the observable result
   */


   private handleError<T> (operation = 'operation', result?: T) {

   }
}
