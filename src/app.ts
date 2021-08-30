import express  from 'express';
import { router } from './routes/test.router';

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/test', router);

export { app };