CREATE TABLE matricula (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    sku VARCHAR(8) NOT NULL,
	curso_cod BIGINT(20) NOT NULL,
    disc_cod BIGINT(20) NOT NULL ,
    aluno_cod BIGINT(20) NOT NULL ,
    turma_cod BIGINT(20) NOT NULL ,
     FOREIGN KEY (curso_cod) REFERENCES curso(codigo),
     FOREIGN KEY (disc_cod) REFERENCES disciplina(codigo),
     FOREIGN KEY (aluno_cod) REFERENCES aluno(codigo),
     FOREIGN KEY (turma_cod) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE avaliacao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nota NUMERIC NOT NULL,
	matricula_codigo BIGINT(20) NOT NULL,
	data_aplic DATETIME NOT NULL,
    referencia VARCHAR(4) ,
     FOREIGN KEY (matricula_codigo) REFERENCES matricula(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

