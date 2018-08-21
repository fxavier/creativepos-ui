import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  adicionar(fornecedor: Fornecedor): Observable<Fornecedor> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.post<Fornecedor>(`${this.fornecedorUrl}`, fornecedor, { headers })
  }

  buscarPorCodigo(codigo: number): Observable<Fornecedor> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
   return this.http.get<Fornecedor>(`${this.fornecedorUrl}/${codigo}`, { headers })
    .pipe(map(response => response));
  }
}
