import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { MenuItem } from 'primeng/api';              // api

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
