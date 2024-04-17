import express from 'express';
import bodyParser from 'body-parser';

import 'dotenv/config'
import authRoutes from './Auth/infrastructure/routes/routes';
import MongoDbConnection from './Shared/Configs/Persistence/MongoDB/MongoDbConnection';

const app = express();
const port = process.env.PORT || 8000;

MongoDbConnection.initializeConnection().then(() => {

	app.use(bodyParser.json());

	app.use('/api/auth', authRoutes);

	app.listen(port, () => console.log(`[SERVER]: started at ${port}`))
})

