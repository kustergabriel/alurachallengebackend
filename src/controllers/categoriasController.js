import categorias from "../models/categoriasModels.js"

class categoriasController {
    static async postCategoria (req,res) {
        try {
            const categoria = req.body
            const resultado = await categorias.adicionaCategoria(categoria);
            res.status(201).json({
                categoria,
                mensagem: "Categoria criada com sucesso!"
            }) 
        } catch (error) {
            console.error(error)
            res.status(500).json ({error: "Erro ao criar categoria!"})
        }
    }

    static async getCategorias (req,res) {
        try {
            const resultado = await categorias.retornaCategorias();
            res.status(200).json ({
                resultado
            })
        } catch (error) {
            console.error(error)
            res.status(500).json ({mensagem: "Erro ao retornar categorias!"})
        }
    }

    static async getCategoria(req, res) {
        try {
            const idCategoria = req.params.id
            const resultado = await categorias.retornaCategoria(idCategoria);
            res.status(200).json ({
                resultado
            })
        } catch (error) {
            console.error(error)
            req.status(500).json ({mensagem: "Erro ao retornar categoria!"})
        }
    }

    static async putCategoria (req,res) {
        try {
            const {titulo, cor} = req.body // pega cada linha do body e coloca no seu respectivo valor correto
            const id = req.params.id
            const resultado = await categorias.atualizaTotalCategoria(id,titulo,cor)
            if (resultado.affectedRows != 0) {
                res.status(200).json({
                    mensagem: "Atualizadado com sucesso!",
                    titulo,
                    cor
                })
            } else {
                res.status(404).json("Indice nao encontrado!")
            }
        } catch (error) {
            
        }
    }

    static async patchCategoria (req,res) {
        try {
            const atualizarCategoria = req.body
            const id = req.params.id
            const resultado = await categorias.atualizaParcialCategoria(id,atualizarCategoria)
            if (resultado.affectedRows != 0) {
                res.status(200).json({
                    atualizarCategoria
                })
            } else {
                res.status(404).json ("Indice nao encontrado!")
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ erro: "Erro ao atualizar vídeo"});
        }
    }

}

export default categoriasController