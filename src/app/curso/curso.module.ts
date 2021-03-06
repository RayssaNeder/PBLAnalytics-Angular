import { CursosRoutingModule } from './curso-routing.module';
import { CursoFormComponent } from './curso-form/curso-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';




@NgModule({
  declarations: [
    CursoFormComponent,
    CursosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    RouterModule,


    SharedModule,
    CursosRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CursoModule { }
