import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class OauthService {

  oauthTokenUrl = 'http://localhost:8092/oauth/token';
  jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {

    this.carregarToken();

   }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpyb290');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        this.armazenaToken(response['access_token']);
      })
      .catch(response => {
        if (response.status == 400){
          const responseJson = response.json();

          if(responseJson.error === 'invalid_grant'){
            return Promise.reject('Usuário ou senha inválida');
          }
        }

        return Promise.reject(response);
      });
  }

  private armazenaToken(token: string){
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenaToken(token);
    }
  }

}
