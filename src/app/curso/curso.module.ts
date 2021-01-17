import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';


@NgModule({
  declarations: [
    CursoFormComponent,
    CursosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,

    SharedModule,
    CursosRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CursoModule { }
