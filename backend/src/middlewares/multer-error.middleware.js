import multer from "multer";

export const multerErrorMiddleware = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            status: 'error', 
            response: err.message 
        });
    } else if (err) {
        return res.status(400).json({
            status: 'error', 
            response: err.message 
        });;
    }
    next();
};