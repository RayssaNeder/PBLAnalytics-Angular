
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Professor } from './../core/model';

export class ProfessorFiltro {
  codigo: number;
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class ProfessorService {

  professorUrl = 'http://localhost:8092/professores';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: ProfessorFiltro): Promise<any> {
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

    return this.http.get(`${this.professorUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const professors = response;
        const resultado = {
          professors,
          total: response['totalElements']
        };

        return resultado;
      });
  }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.delete(`${this.professorUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(professor: Professor): Promise<Professor> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');



    return this.http.post<Professor>(this.professorUrl, professor, { headers })
      .toPromise();
  }

  buscarPorCodigo(cpf: number): Promise<Professor> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get<Professor>(`${this.professorUrl}/${cpf}`, { headers })
      .toPromise()
      .then(response => {
        const professor = response;

        // this.converterStringsParaDatas([lancamento]);

        return professor;
      });
  }

  atualizar(professor: Professor): Promise<Professor> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpyb290')
      .append('Content-Type', 'application/json');

    return this.http.put<Professor>(`${this.professorUrl}/${professor.pessoa.cpf}`,professor, { headers })
      .toPromise()
      .then(response => {
        const professorAlterado = response;

        // this.converterStringsParaDatas([professorAlterado]);

        return professorAlterado;
      });
  }

  listarTodos(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    return this.http.get(this.professorUrl, { headers })
      .toPromise()
      .then(response => response);
  }


}
