import database from '../config/dbconnect.js';


class Video {
    
    adicionaVideo(video) {
        const sql = 'INSERT INTO Videos SET ?';

        database.query (sql, video, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

export default new Video();