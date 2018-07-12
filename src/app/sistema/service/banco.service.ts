import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Banco } from '../../core/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  bancoUrl = 'http://localhost:8080/bancos';

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Banco[]> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.get<Banco[]>(`${this.bancoUrl}`, { headers })
         .pipe(map(response => response));
  }

  adicionar(banco: Banco): Observable<Banco> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.post<Banco>(`${this.bancoUrl}`, banco, { headers });

  }
}
