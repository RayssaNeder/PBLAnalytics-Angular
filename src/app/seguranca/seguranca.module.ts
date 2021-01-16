import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SegurancaRoutingModule,
    FormsModule,
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
