import express from 'express';
const router = express.Router();
// Placeholder artworks routes
router.post('/upload', (req, res) => res.send('Upload artwork'));
router.get('/', (req, res) => res.send('List artworks'));
export default router;
