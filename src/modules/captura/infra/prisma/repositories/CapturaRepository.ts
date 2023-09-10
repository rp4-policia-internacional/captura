import ICreateCapturaDTO from "@modules/captura/dtos/ICreateCaptura.dto";
import CapturaEntity from "@modules/captura/entities/Captura.entity";
import ICapturaRepository from "@modules/captura/repositories/ICapturaRepository";
import { prisma } from "@shared/infra/prisma";

export default class CapturaRepository implements ICapturaRepository{
    public async create(data: ICreateCapturaDTO): Promise<CapturaEntity> {
        const captura = await prisma.captura.create({data});

        return captura as unknown as CapturaEntity;  // tirando tipagem
    }
    public async delete(id: string): Promise<void> {
        await prisma.captura.delete({where: {id: id}});
    }
    public async findById(id: string): Promise<CapturaEntity> {
        const captura = await prisma.captura.findUnique({where: {id: id}});

        return captura as unknown as CapturaEntity;
    }
    public async update(data: CapturaEntity): Promise<CapturaEntity> {
        const captura = await prisma.captura.update({where: {id: data.id}, data});

        return captura as unknown as CapturaEntity;
    }
    public async listAll(): Promise<CapturaEntity[]> {
        return await prisma.captura.findMany();
    }

}