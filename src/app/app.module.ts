import { ProfessorService } from './professor/professor.service';
import { ProfessorModule } from './professor/professor.module';
import { TurmaService } from './turma/turma.service';
import { TurmaModule } from './turma/turma.module';
import { PessoaService } from './pessoa/pessoa.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { DisciplinaService } from './disciplina/disciplina.service';
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
import { PessoasPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';
import { ProfessorFormComponent } from './professor/professor-form/professor-form.component';
import { ProfessoresPesquisaComponent } from './professor/professores-pesquisa/professores-pesquisa.component';


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
    TurmaModule,
    PessoaModule,
    SegurancaModule,
    AlunoModule,
    ProfessorModule,
    SharedModule

  ],
  providers: [CursoService, DisciplinaService, PessoaService, TurmaService, ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
