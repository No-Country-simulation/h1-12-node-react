import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { loginSchema, recoverPasswordSchema, registerInstitutionSchema, registerInsuranceSchema, registerPatientSchema, registerProfessionalSchema } from "../schemas/auth.schema.js";

const router = Router();
const authController = new AuthController();

router.post(
  "/login",
  validationMiddleware([loginSchema]),
  authController.login
);

router.post(
  "/register-patient",
  validationMiddleware([registerPatientSchema]),
  authenticationMiddleware,
  authorizationMiddleware(["create-patient"]),
  authController.register
);

router.post(
  "/register-professional",
  validationMiddleware([registerProfessionalSchema]),
  authenticationMiddleware,
  authorizationMiddleware(["create-professional"]),
  authController.register
);

router.post(
  "/register-insurance",
  validationMiddleware([registerInsuranceSchema]),
  authenticationMiddleware,
  authorizationMiddleware(["create-insurance"]),
  authController.register
);

router.post(
  "/register-institution",
  validationMiddleware([registerInstitutionSchema]),
  authenticationMiddleware,
  authorizationMiddleware(["create-institution"]),
  authController.register
);

router.get("/current", 
  authenticationMiddleware, 
  authController.currentUser
);

router.post(
  "/recover-password",
  validationMiddleware([recoverPasswordSchema]),
  authController.recoverPassword
);

export default router;
