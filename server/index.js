import express from 'express';
import cors from 'cors'
import route from './routes/routes.js';

import Connection from './database/ds.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', route);

const PORT = 8000

Connection();

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))