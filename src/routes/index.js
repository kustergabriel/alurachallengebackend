import express from 'express'
import videos from "./videosRoutes.js"

const router = (app) => {
    app.use(express.json());
    app.use('/videos', videos);
    app.route("/").get((req,res) => {
        res.status(200).send("API")
    })
}

export default router;