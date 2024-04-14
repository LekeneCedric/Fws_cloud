import express from 'express';
import bodyParser from 'body-parser';

import 'dotenv/config'

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.listen(port, () => console.log(`[SERVER]: started at ${port}`))
