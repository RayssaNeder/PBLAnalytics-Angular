import { Component, OnInit } from '@angular/core';

import { OauthService } from './../oauth.service';





@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private auth: OauthService) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha);
  }
}
