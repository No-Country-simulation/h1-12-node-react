import multer from "multer";

export const multerErrorMiddleware = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ 
                status: 'error',
                response: 'File size should not exceed 2 MB' 
            });
        }
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