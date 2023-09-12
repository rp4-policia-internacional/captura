import { Router } from "express";
import CapturaController from "../controllers/CapturaController";

const capturaRoutes = Router();

const controller = new CapturaController();

capturaRoutes.post("/", controller.create);
capturaRoutes.delete("/:id", controller.delete);
capturaRoutes.get("/:id", controller.getOne);
capturaRoutes.get("/", controller.getAll);
capturaRoutes.put("/", controller.update);

export default capturaRoutes;