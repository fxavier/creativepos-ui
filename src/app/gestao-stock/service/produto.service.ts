import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Produto } from '../../core/model';
import { ErrorHandlerService } from '../../core/service/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtoUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  pesquisar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.produtoUrl}/produtos?resumo`)
       .pipe(map(response => response));
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
