import capturaRoutes from "@modules/captura/infra/http/routes/captura.routes";
import { Router } from "express";

const routes = Router();

routes.use("/people", capturaRoutes);

export default routes;