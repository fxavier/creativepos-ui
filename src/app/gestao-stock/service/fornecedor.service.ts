import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../../core/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
   fornecedorUrl = 'http://localhost:8080/fornecedores';
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.fornecedorUrl}`)
       .pipe(map(response => response));
  }
}
