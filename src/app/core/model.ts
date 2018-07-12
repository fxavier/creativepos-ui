export class Banco {
  codigo: number;
  nome: string;
}

export class Categoria {
  codigo: number;
  codigoInterno: string;
  nome: string;
}

export class Moeda {
  codigo: number;
  designacao: string;
  sigla: string;
}

export class Pais {
  codigo: number;
  nome: string;
}

export class Unidade {
  codigo: number;
  designacao: string;
  sigla: string;
}

export class Fabricante {
  codigo: number;
  nome: string;
}

export class Subcategoria {
  codigo: number;
  codigoInterno: string;
  nome: string;
  categoria = new Categoria();
}

export class Fornecedor {
  codigo: number;
  numeroInterno: number;
  nome: string;
  abrevatura: string;
  morada: string;
  caixaPostal: string;
  telefone: string;
  telemovel: string;
  fax: string;
  email: string;
  website: string;
  numeroContribuinte: string;
  representante: string;
  limiteCredito: number;
  saldoContaCorrente: number;
  observacoes: string;
  bilheteIdentidade: string;
  dataEmissao: Date;
  localEmissao: string;
  passaporte: string;
  conta: string;
  nib: string;
  iban: string;
  swift: string;
  activo: boolean;
  pais = new Pais();
  banco = new Banco();
  moeda = new Moeda();
}

export class Produto {
  codigo: number;
  referencia: string;
  codigoBarras: string;
  nome: string;
  stockActual: number;
  stockMinimo: number;
  stockMaximo: number;
  pontoEncomenda: number;
  quantidadeEncomendada: number;
  precovenda: number;
  desconto1: number;
  desconto2: number;
  desconto3: number;
  desconto4: number;
  unidade = new Unidade();
  fabricante = new Fabricante();
  subcategoria = new Subcategoria();
  fornecedor = new Fornecedor();
}
