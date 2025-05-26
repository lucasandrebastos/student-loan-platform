"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulationRoutes = simulationRoutes;
const simulation_controller_1 = require("../controllers/simulation.controller");
async function simulationRoutes(app) {
    app.get("/simulations", simulation_controller_1.getSimulations);
    app.post("/simulations", simulation_controller_1.createSimulation);
    app.put("/simulations", simulation_controller_1.updateSimulation);
    app.delete("/simulations", simulation_controller_1.deleteSimulation);
}
