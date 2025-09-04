import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';

import authRoutes from '../src/routes/authRoutes.js';
import merekRoutes from '../src/routes/merekRoutes.js';
import kategoriBarangRoutes from '../src/routes/kategoriBarangRoutes.js';
import sparepartRoutes from '../src/routes/sparepartRoutes.js';
import transaksiRoutes from '../src/routes/transaksiRoutes.js';
import laporanRoutes from '../src/routes/laporanRoutes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

// CORS
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  })
);

// Routes
app.use('/auth', authRoutes);
app.use('/merek', merekRoutes);
app.use('/kategori-barang', kategoriBarangRoutes);
app.use('/sparepart', sparepartRoutes);
app.use('/transaksi', transaksiRoutes);
app.use('/laporan', laporanRoutes);

// Jangan pakai app.listen()

export default app;