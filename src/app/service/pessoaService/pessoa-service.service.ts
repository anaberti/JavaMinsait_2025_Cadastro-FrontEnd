import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaServiceService {
  private baseURL = 'http://localhost:8080/api/v1/pessoas';
  constructor(private httpClient: HttpClient) {}

  getPessoasList(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.baseURL}`);
  }

  createPessoa(pessoa: Pessoa): Observable<Object> {
    return this.httpClient.post('${this.baseURL}', pessoa);
  }

  getPessoaById(pessoa_id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.baseURL}/${pessoa_id}`);
  }

  updatePessoa(pessoa_id: number, pessoa: Pessoa): Observable<Object> {
    return this.httpClient.put('${this.baseURL}/${pessoa_id}', pessoa);
  }

  deletePessoa(pessoa_id: number): Observable<Object> {
    return this.httpClient.delete('${this.baseURL}/${pessoa_id}');
  }
}
