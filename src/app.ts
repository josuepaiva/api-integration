import express  from 'express';
import mongoose from 'mongoose';
import routerWebhookDeal from './routes/webhookdeal.router';
import routerWebHookProduct from './routes/webhookproduct.router';

import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DB_URL);

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/notificationdeal', routerWebhookDeal);
app.use('/notificationproduct', routerWebHookProduct);

export { app };
