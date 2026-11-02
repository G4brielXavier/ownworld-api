import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middlewares/validate.js';
import { CharController } from '../controllers/charController.js';

const charRoute = Router();
const charController = new CharController();

const createCharSchema = z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    rarity: z.string().optional(),
})

charRoute.get('/', charController.everything);
charRoute.post('/', validate(createCharSchema), charController.create);
charRoute.get('/:name', charController.indexUnique);
charRoute.delete('/', charController.delete);


export { charRoute }