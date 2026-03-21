import express from 'express'
import VideosController from '../controllers/videosController.js'

const router = express.Router();

router.get ('/', VideosController.getVideos);
router.get ('/:id', VideosController.getVideo); // :id pq varia o id
router.post ('/', VideosController.postVideo);
router.delete ('/:id', VideosController.deleteVideo);
router.put ('/:id', VideosController.putVideo);
router.patch ('/:id', VideosController.patchVideo);

export default router;