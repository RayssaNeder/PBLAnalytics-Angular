import { PessoasRoutingModule } from './pessoa-routing.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PessoasPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';


@NgModule({
  declarations: [
    PessoaFormComponent,
    PessoasPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    RouterModule,

    SharedModule,
    PessoasRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PessoaModule { }
