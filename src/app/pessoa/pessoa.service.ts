
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Pessoa } from './../core/model';

export class PessoaFiltro {
  codigo: number;
  nome: string;
  cpf: string;
  telefone: string
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8092/pessoas';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: PessoaFiltro): Promise<any> {
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

    return this.http.get(`${this.pessoaUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const pessoas = response;
        const resultado = {
          pessoas,
          total: response['totalElements']
        };

        return resultado;
      });
  }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.delete(`${this.pessoaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');



    return this.http.post<Pessoa>(this.pessoaUrl, pessoa, { headers })
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get<Pessoa>(`${this.pessoaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const pessoa = response;

        // this.converterStringsParaDatas([lancamento]);

        return pessoa;
      });
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.pessoaUrl}/${pessoa.codigo}`,pessoa, { headers })
      .toPromise()
      .then(response => {
        const pessoaAlterado = response;

        // this.converterStringsParaDatas([pessoaAlterado]);

        return pessoaAlterado;
      });
  }

  listarTodos(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get(this.pessoaUrl, { headers })
      .toPromise()
      .then(response => response);
  }


}
