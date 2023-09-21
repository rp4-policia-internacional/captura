"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _captura = _interopRequireDefault(require("../../../../modules/captura/infra/http/routes/captura.routes"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use("/captura", _captura.default);
var _default = routes;
exports.default = _default;