import express from 'express'
import routes from './src/routes/index.js'
import database from './src/config/dbconnect.js'
import Tabelas from './src/config/tabelas.js'

const app = express()
const tabelas = new Tabelas();

routes(app)

const port = 3000;

database.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
        tabelas.init(database);
        
        app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        });
    }
})



export default app