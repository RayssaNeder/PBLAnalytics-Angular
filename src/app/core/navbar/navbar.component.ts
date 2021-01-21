import { OauthService } from './../../seguranca/oauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public auth:  OauthService){

  }

  exibindoMenu = false;

  criarNovoAccessToken() {
    this.auth.obterNovoAccessToken();
  }

}
