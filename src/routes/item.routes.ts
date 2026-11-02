import { Router } from 'express'
import { z } from 'zod'
import { validate } from '../middlewares/validate.js'
import { ItemController } from '../controllers/itemController.js';

const itemRoute = Router();
const itemController = new ItemController();

const createItemSchema = z.object({
    name: z.string().min(3),
    description: z.string().optional()
})

itemRoute.post('/', validate(createItemSchema), itemController.create);
itemRoute.get('/', itemController.index);
itemRoute.get('/:name', itemController.indexUnique);
itemRoute.delete('/',  itemController.delete);

export { itemRoute }