CREATE TABLE instituicao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	sku VARCHAR(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

Alter table curso Add codigo_inst  BIGINT(20) NOT NULL;
Alter table curso Add  FOREIGN KEY (codigo_inst) REFERENCES instituicao(codigo);
