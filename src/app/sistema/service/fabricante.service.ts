import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fabricante } from '../../core/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  constructor(private http: HttpClient) { }

  fabricanteUrl = 'http://localhost:8080/fabricantes';

  pesquisar(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(`${this.fabricanteUrl}`)
       .pipe(map(response => response));
  }

  adicionar(fabricante: Fabricante): Observable<Fabricante> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.post<Fabricante>(`${this.fabricanteUrl}`, fabricante, { headers });
  }

  buscarPorCodigo(codigo: number): Observable<Fabricante> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.get<Fabricante>(`${this.fabricanteUrl}/${codigo}`, { headers })
     .pipe(map(response => response));

  }
}
