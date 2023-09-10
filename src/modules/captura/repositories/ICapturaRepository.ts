import ICreateCapturaDTO from "../dtos/ICreateCaptura.dto";
import CapturaEntity from "../entities/Captura.entity";


export default interface ICapturaRepository{
    create(data: ICreateCapturaDTO): Promise<CapturaEntity>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<CapturaEntity>;
    update(data: CapturaEntity): Promise<CapturaEntity>;
    listAll(): Promise<CapturaEntity[]>;
}