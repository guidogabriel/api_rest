import { json } from 'express/lib/response';
import connect from '../database/index'
import moment from 'moment'


async function findAll() {
    const client = await connect()
    const res = await client.query(`select * from alunos`);
    return res.rows;
}

async function findByPk(id) {
  const client = await connect()
  const sql = `select * from alunos where id = $1`
  const values = [id]
  const res = await client.query(sql, values);
  return res.rows[0];
}

async function create(aluno){
    const client = await connect();
    const sql = `INSERT INTO PUBLIC.ALUNOS (nome, sobrenome, email, idade, peso, altura) VALUES ($1,$2,$3,$4,$5,$6);`;
    const values = [aluno.nome, aluno.sobrenome, aluno.email, aluno.idade, aluno.peso, aluno.altura];
    return await client.query(sql, values);
}

async function update(aluno){
    const client = await connect();

    const sql = `UPDATE PUBLIC.ALUNOS SET nome=$1, sobrenome=$2, email=$3, idade=$4, peso=$5, altura=$6, updated_at=$7
    WHERE id=$8;`;

    const values = [aluno.nome, aluno.sobrenome, aluno.email, aluno.idade, aluno.peso, aluno.altura, moment(), aluno.id];

    return await client.query(sql, values);
}

async function del(id){
  const client = await connect();
  const sql = `DELETE FROM ALUNOS WHERE ID=$1`;
  const values = [id];
  return await client.query(sql, values);
}

module.exports = { findAll, create, update, findByPk, del }
