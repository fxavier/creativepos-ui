import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Banco } from '../model/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  bancoUrl = 'http://localhost:8080/bancos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
    return this.http.get(`${this.bancoUrl}`, {headers})
      .toPromise()
      .then(response => response);
  }

  adicionar(banco: Banco): Promise<any> {
    const headers = new HttpHeaders()
         .append('Content-Type', 'application/json');
     return this.http.post(`${this.bancoUrl}`, JSON.stringify(banco), {headers})
            .toPromise()
            .then(response => response);
  }
}
