import { Turma } from './../core/model';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'


export class TurmaFiltro {
  codigo: number;
  sku: string;
  nome: string;
  cpf: string;
  telefone: string
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class TurmaService {

  turmaUrl = 'http://localhost:8092/turmas';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: TurmaFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');
    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.codigo) {
      params = params.set('codigo', filtro.codigo.toString());
    }

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.turmaUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const turmas = response;
        const resultado = {
          turmas,
          total: response['totalElements']
        };

        return resultado;
      });
  }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.delete(`${this.turmaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(turma: Turma): Promise<Turma> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');



    return this.http.post<Turma>(this.turmaUrl, turma, { headers })
      .toPromise();
  }

  buscarPorCodigo(codigo: string): Promise<Turma> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get<Turma>(`${this.turmaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const turma = response;

        // this.converterStringsParaDatas([lancamento]);

        return turma;
      });
  }

  atualizar(turma: Turma): Promise<Turma> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.put<Turma>(`${this.turmaUrl}/${turma.codigo}`,turma, { headers })
      .toPromise()
      .then(response => {
        const turmaAlterado = response;

        // this.converterStringsParaDatas([turmaAlterado]);

        return turmaAlterado;
      });
  }

  listarTodos(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get(this.turmaUrl, { headers })
      .toPromise()
      .then(response => response);
  }


}
