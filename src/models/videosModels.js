import database from '../config/dbconnect.js';

class Video {
    // funcao para adicionar um video
    adicionaVideo(video) {
        const sql = 'INSERT INTO Videos SET ?';

        return new Promise((resolve, reject) => {
            database.query(sql, [video], (erro, resultados) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve(resultados);
                }
            })
        })
    }

    // funcao para retornar todos os videos
    retornaVideos () {
        const sql = 'SELECT * FROM Videos';

        return new Promise((resolve, reject) => {
            database.query(sql, (erro, resultados) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve(resultados);
                }
            })
        })
    }

    // funcao para retornar um video baseado no id 
    retornaVideo (id) {
        const sql = 'SELECT * FROM Videos WHERE id = ?'

        return new Promise((resolve, reject) => {
            database.query(sql, [id], (erro,resultados) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultados)
                }
            })
        })
    }

    // funcao para deletar um video baseado no id
    deletaVideo(id) {
        const sql = 'DELETE FROM Videos WHERE id = ?'

        return new Promise ((resolve,reject) =>{
            database.query(sql, [id], (erro,resultado) => {
                if (erro) {
                    reject (erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    // funcao para atualizar TOTALMENTE as informacoes de um video
    atualizaInfosVideo (titulo,descricao,url,id) {
        const sql = 'UPDATE Videos SET titulo = ?, descricao = ? , url = ? WHERE id = ?'
        return new Promise ((resolve,reject) => {
            database.query (sql, [titulo,descricao,url,id], (erro,resultado) => {
                if (erro) {
                    reject (erro)
                } else {
                    resolve (resultado)
                }
            })
        })
    }

    // funcao para atualizar parcialmente as informacoes de um video
    atualizaInfoVideo (id, valores) {
        const sql = 'UPDATE Videos SET ? WHERE id = ?'

        return new Promise ((resolve,reject) => {
            database.query(sql, [valores,id], (erro,resultado) => {
                if (erro) {
                    reject (erro)
                } else {
                    resolve (resultado)
                }
            })
        })
    }


    listarVideosPorCategoria (id) {
        const sql = 'SELECT * FROM Videos WHERE idCategoria = ?'

        return new Promise ((resolve,reject) => {
            database.query(sql, [id], (erro,resultado) => {
                if (erro) {
                    reject (erro)
                } else {
                    resolve (resultado)
                }
            })
        })
    }

    retornaPorNome (titulo) {
        const sql = 'SELECT * FROM Videos WHERE titulo = ?'

        return new Promise ((resolve,reject) => {
            database.query(sql, [titulo], (erro,resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            }) 
        })
    }
}

export default new Video();