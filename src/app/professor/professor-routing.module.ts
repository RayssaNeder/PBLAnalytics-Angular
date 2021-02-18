
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from '../seguranca/auth.guard';
import { ProfessoresPesquisaComponent } from './professores-pesquisa/professores-pesquisa.component';



const routes: Routes = [
  { path: 'professores',
  component: ProfessoresPesquisaComponent,
  canActivate: [AuthGuard]
},
{ path: 'professores/nova',
component: ProfessorFormComponent,
canActivate: [AuthGuard]
},

{ path: 'professores/:codigo',
component: ProfessorFormComponent,
canActivate: [AuthGuard]
},

{ path: 'professores/cpf/:cpf',
component: ProfessorFormComponent,
canActivate: [AuthGuard]
},

];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProfessorsRoutingModule{}


