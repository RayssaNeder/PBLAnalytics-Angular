import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent {

  title = 'pblAnalytics-ui';
  cursos = [
    { nome: 'Calculo Integral I', sku: 'CC04', instituicao: 'CESAR SCHOOL', grau: 'Bacharelado', modalidade: 'Presencial'},
    { nome: 'Calculo Integral II', sku: 'CC05', instituicao: 'CESAR SCHOOL', grau: 'Bacharelado', modalidade: 'Presencial'},
    { nome: 'Calculo Integral III', sku: 'CC06', instituicao: 'CESAR SCHOOL', grau: 'Bacharelado', modalidade: 'Presencial'},
    { nome: 'Calculo Integral I', sku: 'CC07', instituicao: 'CESAR SCHOOL', grau: 'Licenciatura', modalidade: 'À Distância'},
    { nome: 'Calculo Integral II', sku: 'CC08', instituicao: 'CESAR SCHOOL', grau: 'Licenciatura', modalidade: 'À Distância'},
    { nome: 'Calculo Integral III', sku: 'CC09', instituicao: 'CESAR SCHOOL', grau: 'Licenciatura', modalidade: 'À Distância'}
  ];


}
