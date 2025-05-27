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

export async function simulationRoutes(app: FastifyInstance) {
  app.get(
    "/simulations",
    {
      preHandler: async (req: FastifyRequest, reply: FastifyReply) => {
        try {
          checkValidUser(req, reply);
          const token = getTokenFromHeaders(req.headers.authorization);
          console.log("token", token);
          const decoded = await verifyJwt(token as string);

          if (decoded && typeof decoded !== "string") {
            req.user = {
              id: decoded.sub,
            } as StudentPayload;
          }

          return decoded;
        } catch {
          return reply.code(401).send({ error: "Unauthorized" });
        }
      },
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
      preHandler: async (req: FastifyRequest, reply: FastifyReply) => {
        try {
          checkValidUser(req, reply);
          const token = getTokenFromHeaders(req.headers.authorization);
          console.log("token", token);
          const decoded = await verifyJwt(token as string);

          if (decoded && typeof decoded !== "string") {
            req.user = {
              id: decoded.sub,
            } as StudentPayload;
          }

          return decoded;
        } catch {
          return reply.code(401).send({ error: "Unauthorized" });
        }
      },
    },
    createSimulation
  );

  app.put("/simulations", updateSimulation);
  app.delete("/simulations", deleteSimulation);
}
