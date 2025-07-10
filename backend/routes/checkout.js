import express from 'express';
const router = express.Router();
// Placeholder checkout
router.post('/', (req, res) => res.send('Stripe checkout'));
export default router;
