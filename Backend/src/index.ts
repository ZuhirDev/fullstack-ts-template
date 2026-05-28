import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { mainRouter } from './routes/main.routes';
const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use('/api', mainRouter());

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});