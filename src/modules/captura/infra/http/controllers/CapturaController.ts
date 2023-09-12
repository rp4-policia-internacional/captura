import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCapturaService from "@modules/captura/services/CreateCapturaService";

export default class CapturaController{
    public async create(req: Request, res: Response): Promise<Response> {
        const createCaptura = container.resolve(CreateCapturaService);

        const {id_criminoso, id_pais_capturado, id_pais_origem, data, probabilidade} = req.body;
        
        const formatedDate = new Date(data).toISOString();
        const createdCaptura = await createCaptura.execute({
            id_criminoso, 
            id_pais_capturado, 
            id_pais_origem, 
            data: new Date(formatedDate), 
            probabilidade
        });

        return res.json(createdCaptura).status(201).send();
    }
}