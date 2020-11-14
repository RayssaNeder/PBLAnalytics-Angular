CREATE TABLE curso (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE disciplina (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE curso_disciplina (
	curso_codigo BIGINT(20)NOT NULL,
    disciplina_codigo BIGINT(20)NOT NULL,
    PRIMARY KEY (curso_codigo, disciplina_codigo),
    FOREIGN KEY (curso_codigo) REFERENCES curso(codigo),
    FOREIGN KEY (disciplina_codigo) REFERENCES disciplina(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE turma (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    codigo_curso BIGINT(20) NOT NULL,
    turno VARCHAR(10),
    FOREIGN KEY (codigo_curso) REFERENCES curso(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE disciplina_turma (
	disciplina_codigo BIGINT(20)NOT NULL,
    turma_codigo BIGINT(20)NOT NULL,
    PRIMARY KEY (disciplina_codigo, turma_codigo),
    FOREIGN KEY (disciplina_codigo) REFERENCES disciplina(codigo),
    FOREIGN KEY (turma_codigo) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE aluno_turma (
	aluno_codigo BIGINT(20)NOT NULL,
	turma_codigo BIGINT(20)NOT NULL,
    PRIMARY KEY (aluno_codigo, turma_codigo),
    FOREIGN KEY (aluno_codigo) REFERENCES aluno(codigo),
    FOREIGN KEY (turma_codigo) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE professor_turma (
	professor_codigo BIGINT(20)NOT NULL,
	turma_codigo BIGINT(20)NOT NULL,
    PRIMARY KEY (professor_codigo, turma_codigo),
    FOREIGN KEY (professor_codigo) REFERENCES professor(codigo),
    FOREIGN KEY (turma_codigo) REFERENCES turma(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
