import { Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AlunoModule } from './aluno/aluno.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { CursoModule } from './curso/curso.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CursoService } from './curso/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';

import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { CursosPesquisaComponent } from './curso/cursos-pesquisa/cursos-pesquisa.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { ReactiveFormsModule} from '@angular/forms'

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SegurancaModule,
    AppRoutingModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    BrowserModule,
    HttpClientModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DropdownModule,
    CoreModule,

    CursoModule,
    SegurancaModule,
    AlunoModule,
    SharedModule

  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
