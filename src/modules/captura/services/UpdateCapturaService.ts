import { inject, injectable } from "tsyringe";
import ICapturaRepository from "../repositories/ICapturaRepository";
import AppError from "@shared/errors/AppError";
import ICreateCapturaDTO from "../dtos/ICreateCaptura.dto";
import CapturaEntity from "../entities/Captura.entity";

@injectable()
class UpdateCapturaService {

    constructor(
        @inject('CapturaRepository')
        private capturaRepository: ICapturaRepository
    ){}

    public async execute( data: CapturaEntity): Promise<CapturaEntity> {
        const findCaptura = await this.capturaRepository.findById(data.id);

        if(!findCaptura) {
            throw new AppError("Captura não encontrada", 404);
        }

        const updateCaptura = await this.capturaRepository.update(data);
        return updateCaptura;
    }
}

export default UpdateCapturaService;