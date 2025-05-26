import { FastifyInstance } from "fastify";
import {
  createSimulation,
  deleteSimulation,
  getSimulations,
  updateSimulation,
} from "./simulation.controller";

export async function simulationRoutes(app: FastifyInstance) {
  app.get("/simulations", getSimulations);
  app.post("/simulations", createSimulation);

  app.put("/simulations", updateSimulation);
  app.delete("/simulations", deleteSimulation);
}
