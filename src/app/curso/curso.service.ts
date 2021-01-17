
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { LazyLoadEvent } from 'primeng/api';

export class CursoFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursoUrl = 'http://localhost:8092/cursos';


  constructor(private http: HttpClient) {

   }

   consultar(): Promise<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get('http://localhost:8092/cursos',  { headers }).toPromise().then(response => response['content']);

   }


  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.cursoUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  pesquisar(filtro: CursoFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.cursoUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const lancamentos = response['content'];

        const resultado = {
          lancamentos,
          total: response['totalElements']
        };

        return resultado;
      });
  }


}
