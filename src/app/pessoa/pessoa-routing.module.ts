
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { Routes, RouterModule } from '@angular/router';
import { PessoasPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './../seguranca/auth.guard';



const routes: Routes = [
  { path: 'pessoas',
  component: PessoasPesquisaComponent,
  canActivate: [AuthGuard]
},
{ path: 'pessoas/nova',
component: PessoaFormComponent,
canActivate: [AuthGuard]
},

{ path: 'pessoas/:codigo',
component: PessoaFormComponent,
canActivate: [AuthGuard]
},

{ path: 'professores/:cpf',
component: PessoaFormComponent,
canActivate: [AuthGuard]
}
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PessoasRoutingModule{}


