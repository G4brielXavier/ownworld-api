import { Router } from 'express'
import { z } from 'zod';
import { validate } from '../middlewares/validate.js';

import { WorldController } from '../controllers/worldController.js';

const worldRoute = Router();
const worldController = new WorldController();


const schema = z.object({
    name: z.string().min(3),
    description: z.string().optional()
})

worldRoute.get('/', worldController.index);
worldRoute.get('/:name', worldController.indexUnique)
worldRoute.post('/', validate(schema), worldController.create);
worldRoute.delete('/', worldController.delete);

export { worldRoute }