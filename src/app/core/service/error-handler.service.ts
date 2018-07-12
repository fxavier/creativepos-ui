import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  messages: string[] = [];

  adicionar(message: string) {
    this.messages = [];
  }

  limpar() {
    this.messages = [];
  }

}
