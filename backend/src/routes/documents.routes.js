import { Router } from 'express'
import { DocumentsController } from '../controllers/documents.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js' 
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createDocumentSchema, didParam, updateDocumentSchema } from '../schemas/document.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import multer from 'multer'
import { storage } from '../utils/storage.util.js'

const router = Router()
const documentsController = new DocumentsController()
const upload = multer({ storage: storage });

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
    upload.single('image'), 
    validationMiddleware([createDocumentSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-document"]),
    documentsController.uploadDocument
)

router.patch('/:did', 
    upload.single('image'),
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