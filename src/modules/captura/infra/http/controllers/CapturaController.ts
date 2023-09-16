import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCapturaService from "@modules/captura/services/CreateCapturaService";
import DeleteCapturaService from "@modules/captura/services/DeleteCapturaService";
import FindOneCapturaService from "@modules/captura/services/FindOneCaptura";
import ListCapturaService from "@modules/captura/services/ListCapturaService";
import UpdateCapturaService from "@modules/captura/services/UpdateCapturaService";

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

        return res.json(createdCaptura).status(201).send("Produto criado");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteCaptura = container.resolve(DeleteCapturaService);

        const {id} = req.params;
        
        const deletedCaptura = await deleteCaptura.execute(
            id
        );

        return res.json(deletedCaptura).status(200).send();
        
    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneCaptura = container.resolve(FindOneCapturaService);

        const {id} = req.params;

        const gotOneCaptura = await getOneCaptura.execute(
            id
        );

        return res.json(gotOneCaptura).status(200).send("Ok");

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllCaptura = container.resolve(ListCapturaService);

        const gotAllCaptura = await getAllCaptura.execute();

        return res.json(gotAllCaptura).status(200).send();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateCaptura = container.resolve(UpdateCapturaService);

        const {id,id_criminoso, id_pais_capturado, id_pais_origem, data, probabilidade} = req.body;
        
        const formatedDate = new Date(data).toISOString();
        const createdCaptura = await updateCaptura.execute({
            id,
            id_criminoso, 
            id_pais_capturado, 
            id_pais_origem, 
            data: new Date(formatedDate), 
            probabilidade
        });

        return res.json(createdCaptura).status(201).send("Captura alterada com sucesso");
    }
}