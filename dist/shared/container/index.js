"use strict";

var _tsyringe = require("tsyringe");
var _CapturaRepository = _interopRequireDefault(require("../../modules/captura/infra/prisma/repositories/CapturaRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_tsyringe.container.registerSingleton('CapturaRepository', _CapturaRepository.default);