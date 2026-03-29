import express from 'express'
import videos from "./videosRoutes.js"
import categorias from "./categoriasRoutes.js"

const router = (app) => {
    app.use(express.json());
    app.use('/videos', videos);
    app.use('/categorias', categorias)
    app.route("/").get((req,res) => {
        res.status(200).send("API")
    })
}

export default router;