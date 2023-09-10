import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCapturaService from "@modules/captura/services/CreateCapturaService";

export default class CapturaController{
    public async create(req: Request, res: Response): Promise<Response> {
        const createCaptura = container.resolve(CreateCapturaService);

        const {nome, sobrenome, endereco, dataNascimento, quantidadeMacas} = req.body;
        
        const formatedDate = new Date(dataNascimento).toISOString();
        const createdCaptura = await createCaptura.execute({
            nome, 
            sobrenome, 
            endereco, 
            dataNascimento: new Date(formatedDate), 
            quantidadeMacas
        });

        return res.json(createdCaptura).status(201).send();
    }
}