import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent{

  cursos = ['Ciências da computalção', 'Engenharia Civil', 'Ciências Contábeis'];

  salvar(form: NgForm){
    console.log(form);
    console.log(form.value.nome);
  }

}
