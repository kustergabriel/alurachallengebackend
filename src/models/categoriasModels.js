import database from "../config/dbconnect.js"

class Categoria {
    adicionaCategoria(categoria) {
        const sql = 'INSERT INTO Categorias SET ?';

        return new Promise ((resolve,reject) => {
            database.query(sql, [categoria], (erro,resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    retornaCategorias () {
        const sql = 'SELECT * FROM Categorias'

        return new Promise ((resolve,reject) => {
            database.query (sql, (erro,resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    retornaCategoria (idCategoria) {
        const sql = 'SELECT * FROM Categorias WHERE id = ?'

        return new Promise ((resolve,reject) => {
            database.query(sql, [idCategoria], (erro,resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }
}

export default new Categoria();