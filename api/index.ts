import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ title: 'ok' });
})

export default router;