import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidade } from '../../core/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  unidadeUrl = 'http://localhost:8080/unidades';
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Unidade[]> {
    const headers = new HttpHeaders()
          .append('Content-Type', 'application/json');
     return this.http.get<Unidade[]>(`${this.unidadeUrl}`, { headers })
          .pipe(map(response => response));
  }

  adicionar(unidade: Unidade): Observable<Unidade> {
    const headers = new HttpHeaders()
          .append('Content-Type', 'application/json');
    return this.http.post<Unidade>(`${this.unidadeUrl}`, unidade, {headers});
  }


}
