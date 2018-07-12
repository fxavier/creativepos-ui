import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../core/model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Categoria[]> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
     return this.http.get<Categoria[]>(`${this.categoriaUrl}`, { headers })
         .pipe(map(response => response));

  }

  adicionar(categoria: Categoria): Observable<Categoria> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.post<Categoria>(`${this.categoriaUrl}`, categoria, { headers });
  }
}
