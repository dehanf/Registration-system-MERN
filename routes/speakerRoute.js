import express from 'express';
import { fetch,create } from '../controller/speakerController.js';


const router = express.Router();

router.get('/getAllSpeakers', fetch);
router.post('/create', create);

export default router;