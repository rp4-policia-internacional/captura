import { inject, injectable} from "tsyringe";
import ICapturaRepository from "../repositories/ICapturaRepository";
import ICreateCapturaDTO from "../dtos/ICreateCaptura.dto";
import AppError from "@shared/errors/AppError";
import CapturaEntity from "../entities/Captura.entity";

@injectable()
class CreateCapturaRepository{

    constructor(
        @inject('CapturaRepository')
        private capturaRepository:ICapturaRepository
    ){}

    public async execute(data: ICreateCapturaDTO): Promise<CapturaEntity>{
        // regra de negocio aqui

        const createCaptura = await this.capturaRepository.create(data);
        return createCaptura;
    }
}

export default CreateCapturaRepository;