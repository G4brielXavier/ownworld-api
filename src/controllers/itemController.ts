import type { Request, Response } from 'express'
import { ItemService } from '../services/itemService.js'

export class ItemController {
    async create(req: Request, res: Response) {
        try {
            const { name, description } = req.body;

            const itemService = new ItemService();
            const item = await itemService.create({ name, description });

            return res.status(201).json(item)
        } catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    }

    async index(req: Request, res: Response) {
        try {
            const itemService = new ItemService();
            const items = await itemService.everything();

            return res.status(200).json(items);
        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async indexUnique(req: Request, res: Response) {
        try {

            const { id } = req.params;

            if (!id || typeof id !== "string") {
                return res.status(400).json({ message: "Invalid ID" });
            }

            const itemService = new ItemService();
            const item = itemService.findOne(id)

            return res.status(200).json(item)

        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async delete(req: Request, res: Response) {
        try {

            const { name } = req.body;
            const itemService = new ItemService();
            const itemRemoved = await itemService.remove(name);

            return res.status(204).json(itemRemoved);
        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }
}