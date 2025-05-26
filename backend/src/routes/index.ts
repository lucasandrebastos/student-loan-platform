import { studentRoutes } from "../modules/student/student.route";
import { authRoutes } from "../modules/auth/auth.route";
import { simulationRoutes } from "../modules/simulation/simulations.route";
import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  app.register(authRoutes);
  app.register(simulationRoutes);
  app.register(studentRoutes);
}
