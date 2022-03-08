import Aluno from '../models/Aluno'

class AlunoController {

  async index(req, res) {
    const resultado = await Aluno.findAll()
    return res.json(resultado)
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      console.log('sai aqui')
    if(!id){
      return res.status(400).json({
        erros: ['id não enviado no parâmetro da requisição']
      })
    }

    const resultado = await Aluno.findByPk(id);

    if(!resultado || resultado.length === 0 ){
      return res.status(400).json({
        erros: ['Registro não encontrado']
      })
    }
    return res.json(resultado)
    } catch(e){
      return res.status(400).json({
        errors: e.stack
      })
    }
  }

  async store(req, res) {
    try {

      const alunoRequisicao = getAlunoFromReq(req.body)
      const aluno = await Aluno.create(alunoRequisicao);
      return res.json(aluno);

    } catch (e) {
      return res.status(400).json({
        //errors: e.errors.map((err) => err.message),
        errors: e.stack
      });
    }
  }


  async update(req, res) {

    try {
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          erros: ['id não enviado no parâmetro da requisição']
        })
      }

      let alunoBanco = await Aluno.findByPk(id);

      if(!alunoBanco || alunoBanco.length === 0 ){
        return res.status(400).json({
          erros: ['Registro não encontrado']
        })
      }

      const alunoRequisicao = getAlunoFromReq(req.body);
      const alunoAtualizar = getAlunoUpdate(alunoBanco, alunoRequisicao)
      //console.log(alunoAtualizar)
      const registroAtualizado = await Aluno.update(alunoAtualizar)
      return res.json(registroAtualizado)
      } catch(e){
        return res.status(400).json({
          errors: e.stack
        })
      }

  }

  async delete(req, res) {

    try {
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          erros: ['id não enviado no parâmetro da requisição']
        })
      }

      let alunoBanco = await Aluno.findByPk(id);

      if(!alunoBanco || alunoBanco.length === 0 ){
        return res.status(400).json({
          erros: ['Registro não encontrado']
        })
      }


      const registroDeletado = await Aluno.del(alunoBanco.id)
      return res.json(registroDeletado)
      } catch(e){
        return res.status(400).json({
          errors: e.stack
        })
      }

  }

}

function getAlunoFromReq(body)  {
  const aluno = {
      nome: body.nome,
      sobrenome: body.sobrenome,
      email: body.email,
      idade: body.idade,
      peso: body.peso,
      altura: body.altura
  };
  return aluno;
}

function getAlunoUpdate(alunoBanco, alunoRequisicao) {
  const aluno = {
    id: alunoBanco.id,
    nome: !alunoRequisicao.nome ? alunoBanco.nome : alunoRequisicao.nome,
    sobrenome: !alunoRequisicao.sobrenome ? alunoBanco.sobrenome : alunoRequisicao.sobrenome,
    email: !alunoRequisicao.email ? alunoBanco.email : alunoRequisicao.email,
    idade: !alunoRequisicao.idade ? alunoBanco.idade : alunoRequisicao.idade,
    peso: !alunoRequisicao.peso ? alunoBanco.peso : alunoRequisicao.peso,
    altura: !alunoRequisicao.altura ? alunoBanco.altura : alunoRequisicao.altura,
    created_at: alunoBanco.created_at,

  }
  return aluno;
}


export default new AlunoController()
