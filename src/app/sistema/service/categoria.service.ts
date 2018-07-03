import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
      return this.http.get(`${this.categoriaUrl}`, {headers})
             .toPromise()
             .then(response => response);
  }

  adicionar(categoria: Categoria): Promise<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.post(`${this.categoriaUrl}`, JSON.stringify(categoria), {headers})
          .toPromise()
          .then(response => response);
  }
}
