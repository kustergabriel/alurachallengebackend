import videos from '../models/videosModels.js';

class VideosController {
    // retorna a lista de videos
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
    // retorna apenas um video
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
    // cadastra um video
    static async postVideo (req,res) {
        try {
            const video = req.body;
            const resultado = await videos.adicionaVideo(video);
            res.status(201).json({
                mensagem: "Vídeo cadastrado com sucesso",
                id: resultado.insertId,
                video
            });
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao cadastrar vídeo" });
        }
    }
    // deleta um video
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
    // atualiza um video
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
    // atualiza parcialmente um video
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