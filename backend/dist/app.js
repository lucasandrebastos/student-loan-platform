"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const student_route_1 = require("./routes/student.route");
const simulations_route_1 = require("./routes/simulations.route");
exports.app = (0, fastify_1.default)({
    logger: true,
}).withTypeProvider();
exports.app.register(student_route_1.studentRoutes, { prefix: "/api" });
exports.app.register(simulations_route_1.simulationRoutes, { prefix: "/api" });
