import express from "express"
import categoriasController from "../controllers/categoriasController.js"

const router = express.Router();

router.post ('/', categoriasController.postCategoria);
router.get ('/', categoriasController.getCategorias);

export default router;