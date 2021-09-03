import express  from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import routerWebhookDeal from './routes/webhookDeal.router';
import routerWebHookProduct from './routes/webhookProduct.router';
import routerDeals from './routes/dealsConsolidated.router';

import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DB_URL);

const app =  express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/notificationdeal', routerWebhookDeal);
app.use('/notificationproduct', routerWebHookProduct);
app.use('/deals', routerDeals);

export { app };
