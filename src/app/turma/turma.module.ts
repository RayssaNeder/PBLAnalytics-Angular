import { TurmasRoutingModule } from './turma-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { TurmasPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaFormComponent } from './turma-form/turma-form.component';



@NgModule({
  declarations: [
    TurmaFormComponent,
    TurmasPesquisaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TurmasRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class TurmaModule { }
