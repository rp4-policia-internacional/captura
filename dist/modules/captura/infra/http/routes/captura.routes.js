"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _CapturaController = _interopRequireDefault(require("../controllers/CapturaController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const capturaRoutes = (0, _express.Router)();
const controller = new _CapturaController.default();
capturaRoutes.post("/", controller.create);
capturaRoutes.delete("/:id", controller.delete);
capturaRoutes.get("/:id", controller.getOne);
capturaRoutes.get("/", controller.getAll);
capturaRoutes.put("/", controller.update);
var _default = capturaRoutes;
exports.default = _default;