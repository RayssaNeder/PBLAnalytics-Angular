import { OauthService } from './../seguranca/oauth.service';
import { ErrorHandlerService } from './erro-handler.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursoService } from './../curso/curso.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationService } from 'primeng/api';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
   // ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
   // ConfirmDialogModule
  ],
  providers: [
    CursoService,
    ErrorHandlerService,
    OauthService,
    ConfirmationService,,
    Title,
    OauthService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
