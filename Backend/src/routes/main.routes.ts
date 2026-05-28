import CONFIG from '@/config/config';
import express from 'express';
import type { Request, Response } from 'express';

export const mainRouter = () => {

    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
        return res.status(200).json({ message: 'Hello from Backend, port -> ' + CONFIG.PORT });
    });

    router.use('/', (req: Request, res: Response) => {
        return res.status(404).json({ message: 'Route Not Found' });
    });

    return router;
}