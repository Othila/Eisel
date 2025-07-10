import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import artworkRoutes from './routes/artworks.js';
import publicRoutes from './routes/public.js';
import checkoutRoutes from './routes/checkout.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/artworks', artworkRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/checkout', checkoutRoutes);

app.get('/', (req, res) => res.send('🎨 Eisel API is running'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
