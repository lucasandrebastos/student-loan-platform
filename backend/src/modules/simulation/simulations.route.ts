import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  createSimulation,
  deleteSimulation,
  getSimulations,
  updateSimulation,
} from "./simulation.controller";
import {
  checkValidUser,
  getTokenFromHeaders,
} from "../../utils/getTokenFromHeaders";
import { verifyJwt } from "../../utils/jwt";
import { StudentPayload } from "../../@types/fastify-jwt";
import { authenticate } from "../../plugins/authenticante";

export async function simulationRoutes(app: FastifyInstance) {
  app.get(
    "/simulations",
    {
      preHandler: authenticate,
    },
    getSimulations
  );

  app.post<{
    Body: {
      total_value: number;
      number_of_installments: number;
      monthly_interest: number;
      studentId: string;
    };
  }>(
    "/simulations",
    {
      preHandler: authenticate,
    },
    createSimulation
  );

  app.put("/simulations", updateSimulation);
  app.delete<{ Params: { id: string } }>(
    "/simulations/:id",
    { preHandler: authenticate },
    deleteSimulation
  );
}
