import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa/disciplinas-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'disciplinas',
    component: DisciplinasPesquisaComponent,
    canActivate: [AuthGuard]
  },

  { path: 'disciplinas/nova',
    component: DisciplinaFormComponent,
    canActivate: [AuthGuard]
  },

  { path: 'disciplina/:sku',
    component: DisciplinaFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
