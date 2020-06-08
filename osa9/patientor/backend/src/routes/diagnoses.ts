import diagnosesService from '../services/diagnosesService';

import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosesService.getDiagnoses());
});

export default router;
