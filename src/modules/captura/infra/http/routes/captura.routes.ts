import { Router } from "express";
import CapturaController from "../controllers/CapturaController";

const capturaRoutes = Router();

const controller = new CapturaController();

capturaRoutes.post("/", controller.create);

export default capturaRoutes;