import videos from '../models/videosModels.js';

class VideosController {

    static async getVideos (req,res) {
        const { titulo } = req.query // pegamos exatamente o titulo da query

        if (titulo) {
            try {
                const resultado = await videos.retornaPorNome(titulo)
                return res.status(200).json({
                    resultado
                })
            } catch (error) {
                console.error(error)
                return res.status(500).json ({erro: "Erro ao retornar videos pelo nome!"})
            }
        } else {

        try {
            const resultado = await videos.retornaVideos();
            return res.status(200).json({
                resultado
            });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao retornar vídeos" });
            } 
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
        
        const video = req.body;
        if (!video.titulo || video.titulo.trim().length == 0) { // permite se a string eh vazia
            return res.status(400).json({ erro: "Erro ao cadastrar vídeo, campo TITULO vazio!"}); // erro 400 pq o usuario mandou algo errado
        } 

        if (!video.idCategoria) {
            video.idCategoria = 1
        }
        
        try {
            const resultado = await videos.adicionaVideo(video);
            return res.status(201).json({
                mensagem: "Vídeo cadastrado com sucesso",
                id: resultado.insertId,
                video
            });
        } catch (erro) {
            console.error(erro);
            return res.status(500).json({ erro: "Erro ao cadastrar vídeo"});   
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
            res.status(500).json({ erro: "Erro ao deletar vídeo"});
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
            res.status(500).json({ erro: "Erro ao atualizar vídeo"});

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
        res.status(500).json({ erro: "Erro ao atualizar vídeo"});
        }
    }

    static async getVideosPorCategoria (req,res) {
        try {
            const id = req.params.id
            const resultado = await videos.listarVideosPorCategoria(id)
            return res.status(200).json ({
                resultado
            })
            console.log(resultado)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ erro: "Erro ao retornar videos pela categoria"});
        }
    }
}

export default VideosController;