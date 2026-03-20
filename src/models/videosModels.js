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
}

export default new Video();