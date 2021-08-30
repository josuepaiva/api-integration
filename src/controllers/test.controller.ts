import { Response } from 'express';

class TestController {
    public async index(_,res: Response) {
        res.send('message teste');
    }
};

export default new TestController();