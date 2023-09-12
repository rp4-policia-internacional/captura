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
        //if(data){
        //    throw new AppError("Este é um error", 400);
        //}

        const captura = await this.capturaRepository.create(data);
        return captura;
    }
}

export default CreateCapturaRepository;