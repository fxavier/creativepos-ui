import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  paisUrl = 'http://localhost:8080/paises';

  constructor(private http: HttpClient ) { }

 /* pesquisar(): Observable<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.get(`${this.paisUrl}`, {headers});
  }
 */

 pesquisar(): Promise<any> {
  const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
   return this.http.get(`${this.paisUrl}`, {headers})
          .toPromise()
          .then(response => response);
 }

  // adicionar(pais: Pais): Observable<any> {
  //   const headers = new HttpHeaders()
  //        .append('Content-Type', 'application/json');
  //   return this.http.post(this.paisUrl, JSON.stringify(pais), { headers });
  // }

  adicionar(pais: Pais): Promise<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
      return this.http.post(this.paisUrl, JSON.stringify(pais), { headers })
         .toPromise()
         .then(response => response);
  }
}
