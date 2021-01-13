
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursoUrl = 'http://localhost:8092/cursos'

  constructor(private http: HttpClient) {

   }

   consultar(): Promise<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get('http://localhost:8092/cursos',  { headers }).toPromise().then(response => response['content']);

   }
}
