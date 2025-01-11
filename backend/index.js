import dotenv from 'dotenv';
import Connection from './database/db.js';
import express from 'express';
import Routes from "./routes/route.js";
import cors from 'cors';
const app = express();

dotenv.config();

app.use(cors());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use('/',Routes);

Connection(username, password);
app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
