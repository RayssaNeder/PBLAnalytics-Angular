
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Disciplina } from './../core/model';

export class DisciplinaFiltro {
  codigo: number;
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class DisciplinaService {

  disciplinaUrl = 'http://localhost:8092/disciplinas';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: DisciplinaFiltro): Promise<any> {
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

    return this.http.get(`${this.disciplinaUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const disciplinas = response;
        const resultado = {
          disciplinas,
          total: response['totalElements']
        };

        return resultado;
      });
  }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.delete(`${this.disciplinaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(disciplina: Disciplina): Promise<Disciplina> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');



    return this.http.post<Disciplina>(this.disciplinaUrl, disciplina, { headers })
      .toPromise();
  }

  buscarPorCodigo(sku: string): Promise<Disciplina> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get<Disciplina>(`${this.disciplinaUrl}/${sku}`, { headers })
      .toPromise()
      .then(response => {
        const disciplina = response;

        // this.converterStringsParaDatas([lancamento]);

        return disciplina;
      });
  }

  atualizar(disciplina: Disciplina): Promise<Disciplina> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.put<Disciplina>(`${this.disciplinaUrl}/${disciplina.sku}`,disciplina, { headers })
      .toPromise()
      .then(response => {
        const cursoAlterado = response;

        // this.converterStringsParaDatas([cursoAlterado]);

        return cursoAlterado;
      });
  }


}
