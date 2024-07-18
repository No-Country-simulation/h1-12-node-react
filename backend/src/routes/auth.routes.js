import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login);

router.post(
  "/register-patient",
  authenticationMiddleware,
  authorizationMiddleware(["create-patient"]),
  authController.register
);

router.post(
  "/register-professional",
  authenticationMiddleware,
  authorizationMiddleware(["create-professional"]),
  authController.register
);

router.post(
  "/register-insurance",
  authenticationMiddleware,
  authorizationMiddleware(["create-insurance"]),
  authController.register
);

router.post(
  "/register-institution",
  authenticationMiddleware,
  authorizationMiddleware(["create-institution"]),
  authController.register
);

router.get("/current", authenticationMiddleware, authController.currentUser);

export default router;
