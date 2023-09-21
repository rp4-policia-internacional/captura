"use strict";

require("reflect-metadata");
var _cors = _interopRequireDefault(require("cors"));
require("express-async-errors");
var _express = _interopRequireDefault(require("express"));
require("dotenv/config");
var _routes = _interopRequireDefault(require("./routes"));
var _AppError = _interopRequireDefault(require("../../errors/AppError"));
require("../prisma");
require("../../container");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("./routes/swagger.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use("/api", _routes.default);
app.use((err, req, res, _) => {
  if (err instanceof _AppError.default) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }
  console.log(err);
  return res.status(500).json({
    status: "error",
    message: "internal server error"
  });
});
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
const porta = process.env.PORT || 3333;
app.listen(porta, () => console.log(`Serve is up! on port ${porta}`));