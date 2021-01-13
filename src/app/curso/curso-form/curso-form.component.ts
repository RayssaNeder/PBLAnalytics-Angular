import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class Curso{
sku: string;
nome: string;
modalidade: string;
grau: string;
}

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent{

  curso: Curso = new Curso();
  modalidades = ['Presencial', 'à distânica'];
  graus = ['Bacharelado', 'Licenciatura'];

  salvar(form: NgForm){
    console.log(form);
    console.log(form.value.nome);
  }

}
