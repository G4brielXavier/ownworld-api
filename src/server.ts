import express from 'express'
import cors from 'cors'

import { itemRoute } from './routes/item.routes.js';
import { charRoute } from './routes/character.routes.js'
import { worldRoute } from './routes/worlds.routes.js';

const app = express();
const port = 5454;

app.use(cors());
app.use(express.json());

app.use('/items', itemRoute);
app.use('/chars', charRoute);
app.use('/worlds', worldRoute);


app.listen(port, () => {
    console.log(`OwnWorldAPI v1 is listening...`)
    console.log(`In http://localhost:${port} or http://125.0.0.1:${port}`)
    console.log(``)
})