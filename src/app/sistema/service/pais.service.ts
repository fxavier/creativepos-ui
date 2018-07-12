import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../../core/model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  paisUrl = 'http://localhost:8080/paises';

  constructor(private http: HttpClient ) { }

 pesquisar(): Observable<Pais[]> {
  const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
   return this.http.get<Pais[]>(`${this.paisUrl}`, { headers })
         .pipe(map(response => response));
 }



  adicionar(pais: Pais): Observable<Pais> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
      return this.http.post<Pais>(`${this.paisUrl}`, pais, { headers });
  }
}
