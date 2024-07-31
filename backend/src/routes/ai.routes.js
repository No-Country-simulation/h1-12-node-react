import { Router } from "express";
import { AiController } from "../controllers/ai.controller.js";
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";
import multer from 'multer'
import { multerErrorMiddleware } from "../middlewares/multer-error.middleware.js";
import path from 'path'
const router = Router();
const aiController = new AiController();

const upload = multer({
    limits: { fileSize: 25 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      const filetypes = /mp3|mp4|mpeg|mpga|m4a|wav|webm/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = filetypes.test(file.mimetype);
  
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb(new Error('Only mp3, mp4, mpeg, mpga, m4a, wav and webm files are allowed.'));
      }
    },
    dest: 'uploads/'
  });

router.post(
    "/transcribe",
    upload.single('file'), 
    multerErrorMiddleware,
    authenticationMiddleware,
    authorizationMiddleware(["transcribe"]),
    aiController.transcribe
)
    

export default router;
