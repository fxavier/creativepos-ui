import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moeda } from '../../core/model';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {
  moedaUrl = 'http://localhost:8080/moedas';
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Moeda[]> {
    const headers = new HttpHeaders()
          .append('Content-Type', 'application/json');
    return this.http.get<Moeda[]>(`${this.moedaUrl}`, { headers })
          .pipe(map(response => response));
  }
}


