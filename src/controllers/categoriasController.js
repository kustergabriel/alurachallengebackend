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

}

export default categoriasController