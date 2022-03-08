require ('dotenv').config()

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE

};



// drop table alunos;
// CREATE TABLE public.alunos (
// 	id serial4 NOT NULL,
// 	nome varchar(255) NOT NULL,
// 	sobrenome varchar(255) NOT NULL,
// 	email varchar(255) NOT NULL,
// 	idade int4 NOT NULL,
// 	peso float8 NOT NULL,
// 	altura float8 NOT NULL,
// 	created_at timestamp NOT null default now(),
// 	updated_at timestamp  NOT null default now(),
// 	CONSTRAINT pk_id_aluno PRIMARY KEY (id)
// );
