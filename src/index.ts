import express from 'express';
import bodyParser from 'body-parser';

import 'dotenv/config'
import authRoutes from './Auth/infrastructure/routes/routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => console.log(`[SERVER]: started at ${port}`))
