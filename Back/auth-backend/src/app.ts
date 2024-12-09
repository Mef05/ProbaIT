import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/auth')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default app;