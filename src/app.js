import express from 'express'
import alunoController from './controllers/AlunoController'
const app = express();

app.use(express.json())


app.get('/', alunoController.index)
app.get('/:id', alunoController.show)
app.post('/', alunoController.store)
app.put('/:id', alunoController.update)
app.delete('/:id', alunoController.delete)

//https://www.luiztools.com.br/post/como-usar-nodejs-postgresql/

app.listen(3002, () => {
  console.log('escutando');
});
