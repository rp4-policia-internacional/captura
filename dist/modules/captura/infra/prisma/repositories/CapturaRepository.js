"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _prisma = require("../../../../../shared/infra/prisma");
class CapturaRepository {
  async create(data) {
    const captura = await _prisma.prisma.captura.create({
      data
    });
    return captura; // tirando tipagem
  }

  async delete(id) {
    await _prisma.prisma.captura.delete({
      where: {
        id: id
      }
    });
  }
  async findById(id) {
    const captura = await _prisma.prisma.captura.findUnique({
      where: {
        id: id
      }
    });
    return captura;
  }
  async update(data) {
    const captura = await _prisma.prisma.captura.update({
      where: {
        id: data.id
      },
      data
    });
    return captura;
  }
  async listAll() {
    return await _prisma.prisma.captura.findMany();
  }
}
exports.default = CapturaRepository;