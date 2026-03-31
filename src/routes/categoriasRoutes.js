import express from "express"
import categoriasController from "../controllers/categoriasController.js"

const router = express.Router();

router.post ('/', categoriasController.postCategoria);
router.get ('/', categoriasController.getCategorias);
router.get ('/:id', categoriasController.getCategoria);
router.put ('/:id', categoriasController.putCategoria);
router.patch ('/:id', categoriasController.patchCategoria);

export default router;