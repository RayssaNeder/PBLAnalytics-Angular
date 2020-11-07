CREATE TABLE aluno (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
    ativo VARCHAR(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE curso (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE turma (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
    codigo_curso BIGINT(20) NOT NULL,
    FOREIGN KEY (codigo_curso) REFERENCES curso(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE aluno_turma (
	aluno_codigo BIGINT(20)NOT NULL,
	turma_codigo BIGINT(20)NOT NULL,
    PRIMARY KEY (aluno_codigo, turma_codigo),
    FOREIGN KEY (aluno_codigo) REFERENCES aluno(codigo),
    FOREIGN KEY (turma_codigo) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;