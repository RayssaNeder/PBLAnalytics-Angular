import { ProfessorsRoutingModule } from './professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfessoresPesquisaComponent } from './professores-pesquisa/professores-pesquisa.component';


@NgModule({
  declarations: [
    ProfessorFormComponent,
    ProfessoresPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    RouterModule,

    SharedModule,
    ProfessorsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ProfessorModule { }
