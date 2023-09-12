import { injectable, inject } from "tsyringe";
import ICapturaRepository from "../repositories/ICapturaRepository";

@injectable()
class FindOneCapturaService {

    constructor(
        @inject('CapturaRepository')
        private capturaRepository: ICapturaRepository
    ){}

    public async execute(id: string) {
        const findCaptura = await this.capturaRepository.findById(id);
        
        return findCaptura;

    }

}

export default FindOneCapturaService;