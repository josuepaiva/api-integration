import express  from 'express';
import mongoose from 'mongoose';
import routerWebhookdeal from './routes/webhookdeal.router';

import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DB_URL);

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/webhookdeal', routerWebhookdeal);

export { app };
