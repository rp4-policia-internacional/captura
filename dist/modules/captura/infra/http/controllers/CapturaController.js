"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateCapturaService = _interopRequireDefault(require("../../../services/CreateCapturaService"));
var _DeleteCapturaService = _interopRequireDefault(require("../../../services/DeleteCapturaService"));
var _FindOneCaptura = _interopRequireDefault(require("../../../services/FindOneCaptura"));
var _ListCapturaService = _interopRequireDefault(require("../../../services/ListCapturaService"));
var _UpdateCapturaService = _interopRequireDefault(require("../../../services/UpdateCapturaService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CapturaController {
  async create(req, res) {
    const createCaptura = _tsyringe.container.resolve(_CreateCapturaService.default);
    const {
      id_criminoso,
      id_pais_capturado,
      id_pais_origem,
      data,
      probabilidade
    } = req.body;
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
  async delete(req, res) {
    const deleteCaptura = _tsyringe.container.resolve(_DeleteCapturaService.default);
    const {
      id
    } = req.params;
    const deletedCaptura = await deleteCaptura.execute(id);
    return res.json(deletedCaptura).status(200).send();
  }
  async getOne(req, res) {
    const getOneCaptura = _tsyringe.container.resolve(_FindOneCaptura.default);
    const {
      id
    } = req.params;
    const gotOneCaptura = await getOneCaptura.execute(id);
    return res.json(gotOneCaptura).status(200).send("Ok");
  }
  async getAll(req, res) {
    const getAllCaptura = _tsyringe.container.resolve(_ListCapturaService.default);
    const gotAllCaptura = await getAllCaptura.execute();
    return res.json(gotAllCaptura).status(200).send();
  }
  async update(req, res) {
    const updateCaptura = _tsyringe.container.resolve(_UpdateCapturaService.default);
    const {
      id,
      id_criminoso,
      id_pais_capturado,
      id_pais_origem,
      data,
      probabilidade
    } = req.body;
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
exports.default = CapturaController;