import videos from '../models/videosModels.js';

class VideosController {

    static async getVideos (req,res) {
        try {
            const resultado = await videos.retornaVideos();
            res.status(200).json({
                resultado
            });
        } catch (error) {
            res.status(500).json({ erro: "Erro ao retornar vídeos" });
        } 
    }

    static async getVideo (req,res) {
        try {
            const id = req.params.id
            const resultado = await videos.retornaVideo(id); // aqui ja retorna um objeto
            console.log(resultado)
            if (resultado != 0) {
                res.status (200).json({
                    resultado
                })
            } else {
                res.status(404).json ("Indice nao encontrado!")
            }
            
        } catch (error) {
            res.status(500).json({ erro: "Erro ao retornar vídeo" });
        }

    }

    static async postVideo (req,res) {
        try {
            const video = req.body;
            const titulo = video.titulo // como req.body retorna um objeto, estou pegando apenas o campo q me interessa
            if (!video.titulo || titulo.trim().length == 0) { // essa verificacao permite verificar se a string eh vazia
                res.status(400).json({ erro: "Erro ao cadastrar vídeo, campo TITULO vazio!"}); // erro 400 pq o usuario mandou algo errado
            } 
            const resultado = await videos.adicionaVideo(video);
            res.status(201).json({
                mensagem: "Vídeo cadastrado com sucesso",
                id: resultado.insertId,
                video
            });
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao cadastrar vídeo"});   
        }
    }

    static async deleteVideo (req,res) {
        try {
            const id = req.params.id;
            const resultado = await videos.deletaVideo(id);
            console.log(resultado)
            if (resultado.affectedRows != 0) {
                res.status (200).json({
                    mensagem: "Video deletado com sucesso!"
                })
            } else {
                res.status(404).json ("Indice nao encontrado!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    static async putVideo (req,res) {
        try {
            const {titulo, descricao, url} = req.body
            const id = req.params.id
            const resultado = await videos.atualizaInfosVideo (titulo,descricao,url,id)
            console.log(resultado)
            if (resultado.affectedRows != 0) {
                res.status(200).json ({
                    "id": id,
                    "titulo": titulo,
                    "descricao" : descricao,
                    "url": url
                })} else {
                        res.status(404).json ("Indice nao encontrado!")
                }
        } catch (error) {
            console.log(error)
        }
    }
    
    static async patchVideo (req,res) {
        try {
        const valores = req.body
        const id = req.params.id
        const resultado = await videos.atualizaInfoVideo(id,valores)
        if (resultado.affectedRows != 0) {
                res.status(200).json ({
                    valores
                })} else {
                    res.status(404).json ("Indice nao encontrado!")
                }
    } catch (error) {
        console.log(error)
        }
    }
}

export default VideosController;