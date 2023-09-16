import { injectable, inject } from "tsyringe";
import ICapturaRepository from "../repositories/ICapturaRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class FindOneCapturaService {

    constructor(
        @inject('CapturaRepository')
        private capturaRepository: ICapturaRepository
    ){}

    public async execute(id: string) {
        const findCaptura = await this.capturaRepository.findById(id);
        
        if(!findCaptura){
            throw new AppError("Captura não encontrada", 404);
        }

        return findCaptura;

    }

}

export default FindOneCapturaService;