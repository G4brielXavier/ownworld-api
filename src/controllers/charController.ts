import type { Request, Response } from 'express';
import { CharService } from '../services/charService.js';

export class CharController {

    async create(req: Request, res: Response) {
        try {
            const { name, description } = req.body;
            const charService = new CharService();
            const char = await charService.create({ name, description })

            return res.status(201).json(char)

        } catch (err: any) {
            return res.status(500).json({ message: err.message })
        }
    }

    async everything(req: Request, res: Response) {
        try {
            const charService = new CharService();
            const chars = await charService.everything();

            return res.status(200).json(chars);
        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async indexUnique(req: Request, res: Response) {
        try {
            const { name } = req.params;

            if (!name || typeof name !== "string") {
                return res.status(400).json({ message: "Invalid Parameter in GET /characters" })
            }

            const charService = new CharService();
            const char = await charService.findOne(name);

            return res.status(200).json(char);
        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const charService = new CharService();
            const char = await charService.remove(name);

            return res.status(204).json(char)
        } catch (err) {
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }

}