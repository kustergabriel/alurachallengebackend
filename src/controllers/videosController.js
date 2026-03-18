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

    }
    // atualiza um video
    static async putVideo (req,res) {

    }
    // atualiza parcialmente um video
    static async patchVideo (req,res) {

    }
}

export default VideosController;