import { HTTP_CODES } from "../utils/http-codes.util.js";
import { z } from 'zod';

export const validationMiddleware = (schemas) => (req, res, next) => {
    try {
        const schemasArray = Array.isArray(schemas) ? schemas : [schemas];

        schemasArray.forEach(schema => {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
        });

        next();
    } catch (err) {
        console.error(err);
        if (err instanceof z.ZodError) {
            const errors = err.errors.map(e => ({
                message: e.message,
                path: e.path
            }));
            res.status(HTTP_CODES.BAD_REQUEST).json({ errors });
        } else {
            next(err);
        }
    }
};