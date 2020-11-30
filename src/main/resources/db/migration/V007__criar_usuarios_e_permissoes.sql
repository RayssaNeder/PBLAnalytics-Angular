CREATE TABLE usuario (
	codigo BIGINT(20) PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	codigo BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	codigo_usuario BIGINT(20) NOT NULL,
	codigo_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (codigo_usuario, codigo_permissao),
	FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
	FOREIGN KEY (codigo_permissao) REFERENCES permissao(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (codigo, nome, email, senha) values (1, 'Administrador', 'admin@gmail.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');
INSERT INTO usuario (codigo, nome, email, senha) values (2, 'Consulta', 'consultaUser@gmail.com', '$2a$10$Befb81wDh6f992RoNoi7ie0Bh/ydeeZzAHOEE95al.ALnI/kvNcQS');

INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_CADASTRAR_INSTITUICAO');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_PESQUISAR_INSTITUICAO');

INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_CADASTRAR_CURSO');
INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_REMOVER_CURSO');
INSERT INTO permissao (codigo, descricao) values (5, 'ROLE_PESQUISAR_CURSO');

INSERT INTO permissao (codigo, descricao) values (6, 'ROLE_CADASTRAR_ALUNO');
INSERT INTO permissao (codigo, descricao) values (7, 'ROLE_REMOVER_ALUNO');
INSERT INTO permissao (codigo, descricao) values (8, 'ROLE_PESQUISAR_ALUNO');

INSERT INTO permissao (codigo, descricao) values (9, 'ROLE_CADASTRAR_PROFESSOR');
INSERT INTO permissao (codigo, descricao) values (10, 'ROLE_REMOVER_PROFESSOR');
INSERT INTO permissao (codigo, descricao) values (11, 'ROLE_PESQUISAR_PROFESSOR');

INSERT INTO permissao (codigo, descricao) values (12, 'ROLE_CADASTRAR_PESSOA');
INSERT INTO permissao (codigo, descricao) values (13, 'ROLE_REMOVER_PESSOA');
INSERT INTO permissao (codigo, descricao) values (14, 'ROLE_PESQUISAR_PESSOA');

-- admin
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 6);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 7);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 9);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 10);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 11);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 12);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 13);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 14);

-- maria
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 11);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 14);