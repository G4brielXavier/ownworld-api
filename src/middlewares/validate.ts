import type { Request, Response, NextFunction } from 'express'
import { ZodObject, ZodError } from 'zod'

export const validate = (schema: ZodObject) =>
    async (req: Request, res:Response, next: NextFunction) => {
        try {
            req.body = await schema.parseAsync(req.body);
            return next();
        } catch (err) {
            if (err instanceof ZodError) {
                return res.status(400).json({
                    message: "Validation Error",
                    errors: err.issues.map(e => ({
                        field: e.path.join("."),
                        message: e.message
                    }))
                });
            }
            return res.status(500).json({ message: "Server Internal Error" })
        }
    }
