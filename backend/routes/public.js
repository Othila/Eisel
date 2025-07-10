import express from 'express';
const router = express.Router();
// Placeholder public feed
router.get('/', (req, res) => res.send('Public artworks feed'));
export default router;
