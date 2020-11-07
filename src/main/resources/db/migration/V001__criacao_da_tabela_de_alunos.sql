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
	codigo_aluno BIGINT(20)NOT NULL,
	codigo_turma BIGINT(20)NOT NULL,
    PRIMARY KEY (codigo_aluno, codigo_turma),
    FOREIGN KEY (codigo_aluno) REFERENCES aluno(codigo),
    FOREIGN KEY (codigo_turma) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;