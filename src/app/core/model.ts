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
