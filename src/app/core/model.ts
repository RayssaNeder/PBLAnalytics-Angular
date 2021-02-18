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

export class Turma {
  codigo: number;
  sku: string;
  dataInicio: Date;
  dataConclusao: Date;

}

export class Disciplina {
  codigo: number;
  sku: string;
  nome: string;
  curso = new Curso();

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

  export class Professor {
    codigo: number;
    pessoa = new Pessoa();

  }
