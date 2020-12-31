import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


class Disciplina{
  codigo: string;
  nome: string;
  curso: string;
}


@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent{

  disciplina: Disciplina = new Disciplina();
  cursos = ['Ciências da computalção', 'Engenharia Civil', 'Ciências Contábeis'];

  salvar(form: NgForm){
    //this.disciplina.codigo = form.value.codigo;
    //this.disciplina.nome = form.value.nome;
    //this.disciplina.curso = form.value.curso
    console.log(form.value);
    console.log(this.disciplina);
  }

}
