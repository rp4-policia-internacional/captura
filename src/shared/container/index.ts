import ICapturaRepository from "@modules/captura/repositories/ICapturaRepository";
import { container } from "tsyringe";
import CapturaRepository from "@modules/captura/infra/prisma/repositories/CapturaRepository";

container.registerSingleton<ICapturaRepository>(
    'CapturaRepository',
    CapturaRepository
)