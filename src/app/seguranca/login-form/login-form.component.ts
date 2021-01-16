import { Router } from '@angular/router';
import { ErrorHandlerService } from './../../core/erro-handler.service';
import { Component, OnInit } from '@angular/core';

import { OauthService } from './../oauth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(public auth: OauthService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(() => {
      this.router.navigate(['/cursos']);
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    });
  }
}
