import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
