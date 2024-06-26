import express from "express";
import {
  getProfile,
  login,
  logout,
  newUser,
} from "../controllers/userController.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  loginValidator,
  registerValidator,
  validatorHandler,
} from "../lib/validator.js";
const route = express.Router();

route.post("/login", loginValidator(), validatorHandler, login);
route.post(
  "/new",
  singleAvatar,
  registerValidator(),
  validatorHandler,
  newUser
);

route.use(isAuthenticated); // authentication is made compulsory to access any of the folowing routes
route.get("/me", getProfile);
route.get("/logout", logout);

export default route;
