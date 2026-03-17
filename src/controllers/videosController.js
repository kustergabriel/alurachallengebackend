import videos from '../models/videosModels.js';

class VideosController {
    // retorna a lista de videos
    static async getVideos (req,res) {
        
    }
    // retorna apenas um video
    static async getVideo (req,res) {

    }
    // cadastra um video
    static async postVideo (req,res) {
        try {
            const video = req.body;
            res.status(201).json(video);
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