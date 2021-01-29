import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa/disciplinas-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { TableModule } from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';


import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [DisciplinaFormComponent, DisciplinasPesquisaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: []
})
export class DisciplinaModule { }
