import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8092'],
        disallowedRoutes: ['http://localhost:8092/oauth/token']
      }
    }),

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [JwtHelperService]
})
export class SegurancaModule { }
