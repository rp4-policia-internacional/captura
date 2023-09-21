"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class CapturaEntity {
  constructor(id, id_criminoso, id_pais_capturado, id_pais_origem, data, probabilidade) {
    this.id = void 0;
    this.id_criminoso = void 0;
    this.id_pais_capturado = void 0;
    this.id_pais_origem = void 0;
    this.data = void 0;
    this.probabilidade = void 0;
    this.id = id;
    this.id_criminoso = id_criminoso;
    this.id_pais_capturado = id_pais_capturado;
    this.id_pais_origem = id_pais_origem;
    this.data = data;
    this.probabilidade = probabilidade;
  }
}
var _default = CapturaEntity;
exports.default = _default;