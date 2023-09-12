import { injectable, inject } from "tsyringe";
import ICapturaRepository from "../repositories/ICapturaRepository";

@injectable()
class ListCapturaService {

    constructor(
        @inject('CapturaRepository')
        private capturaRepository: ICapturaRepository
    ){}

    public async execute() {
        return await this.capturaRepository.listAll();
    }
}

export default ListCapturaService;