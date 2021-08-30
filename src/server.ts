import { app } from './app';

const port: number = parseInt(process.env.PORT_SERVER) || 4000;

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});
