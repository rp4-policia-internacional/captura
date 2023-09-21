"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prisma = exports.exclude = void 0;
var _client = require("@prisma/client");
var _prismaExclude = require("prisma-exclude");
const prisma = new _client.PrismaClient();
exports.prisma = prisma;
const exclude = (0, _prismaExclude.prismaExclude)(prisma);
exports.exclude = exclude;