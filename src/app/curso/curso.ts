import { Modalidade, Grau } from './../core/model';
import { isConstructorTypeNode } from "typescript";

export class Curso{
  codigo: number;
  nome: string;
  sku: string;
  modalidade: Modalidade;
  grau: Grau;


construtor(){
  this.codigo = null;
  this.nome = null;
  this.sku = null;
  this.modalidade = null;
  this.grau = null;
  }

}
