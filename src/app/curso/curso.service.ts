
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Curso } from './../core/model';

export class CursoFiltro {
  codigo: number;
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class CursoService {

  cursoUrl = 'http://localhost:8092/cursos';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: CursoFiltro): Promise<any> {
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

    return this.http.get(`${this.cursoUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const cursos = response;
        const resultado = {
          cursos,
          total: response['totalElements']
        };

        return resultado;
      });
  }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.delete(`${this.cursoUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(curso: Curso): Promise<Curso> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.post<Curso>(this.cursoUrl, curso, { headers })
      .toPromise();
  }

  buscarPorCodigo(codigo: string): Promise<Curso> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get<Curso>(`${this.cursoUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const curso = response;

        // this.converterStringsParaDatas([lancamento]);

        return curso;
      });
  }

  atualizar(curso: Curso): Promise<Curso> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.put<Curso>(`${this.cursoUrl}/${curso.sku}`,curso, { headers })
      .toPromise()
      .then(response => {
        const cursoAlterado = response;

        // this.converterStringsParaDatas([cursoAlterado]);

        return cursoAlterado;
      });
  }


}
