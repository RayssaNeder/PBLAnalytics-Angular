export class Modalidade {
  label: string;
  value: string;
}

export class Grau {
  label: string;
  value: string;
}

export class Curso {
  codigo: number;
  sku: string;
  nome: string;
  modalidade: Modalidade;
  grau: Grau;

}

export class Disciplina {
  codigo: number;
  sku: string;
  nome: string;
  cursos: Curso[];

}

export class Pessoa{
  codigo: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  sexo: string;
  ocupacao: string;
  }
