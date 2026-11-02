import type { Request, Response } from 'express'
import { WorldService } from '../services/worldService.js'


export class WorldController {

    async create(req: Request, res: Response) {
        try {

            const { name, description } = req.body;

            const worldService = new WorldService();
            const world = await worldService.create({ name, description })

            return res.status(201).json(world)

        } catch (err: any) {
            return res.status(500).json({ message: err.message })
        }
    }

    async index(req: Request, res: Response) {
        try {

            const worldService = new WorldService();
            const worlds = await worldService.everything();

            return res.status(200).json(worlds)

        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async indexUnique(req: Request, res: Response) {
        try {

            const { name } = req.params

            if (!name || typeof name !== "string") {
                return res.status(400).json({ message: "Invalid ID" })
            }

            const worldService = new WorldService();
            const world = worldService.findOne(name)

            return res.status(200).json(world)

        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            
            const { name } = req.body;
            const worldService = new WorldService();
            const worldRemoved = await worldService.remove(name);

            return res.status(204).json(worldRemoved);

        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

}