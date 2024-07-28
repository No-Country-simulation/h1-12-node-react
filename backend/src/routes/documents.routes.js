import { Router } from 'express'
import { DocumentsController } from '../controllers/documents.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js' 
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createDocumentSchema, didParam, updateDocumentSchema } from '../schemas/document.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import multer from 'multer'
import { documentStorage } from '../utils/storage.util.js'
import { HttpError } from '../utils/http-error.util.js'
import { multerErrorMiddleware } from '../middlewares/multer-error.middleware.js'

const router = Router()
const documentsController = new DocumentsController()
const upload = multer({
    storage: documentStorage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.mimetype)) {
        return cb(new HttpError('Invalid file type. Only JPEG, PNG and PDF files are allowed.', 400), false);
      }
      cb(null, true);
    },
  });

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-documents"]),
    documentsController.getAllDocuments
)

router.get('/:did',   
    validationMiddleware([didParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-document"]),
    documentsController.getDocumentById
)

router.post('/',  
    upload.single('document'), 
    multerErrorMiddleware,
    validationMiddleware([createDocumentSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-document"]),
    documentsController.uploadDocument
)

router.patch('/:did', 
    upload.single('document'),
    multerErrorMiddleware,
    validationMiddleware([didParam, updateDocumentSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-document"]),
    documentsController.updateDocument
)

router.delete('/:did',   
    validationMiddleware([didParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-document"]),
    documentsController.deleteDocument
)

export default router