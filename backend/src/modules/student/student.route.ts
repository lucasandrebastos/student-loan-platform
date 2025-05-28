import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { updateStudent, getStudent, dashboard } from "./student.controller";
import { authenticate } from "../../plugins/authenticante";

export async function studentRoutes(app: FastifyInstance) {
  app.get(
    "/me",
    {
      preHandler: authenticate,
    },
    getStudent
  );

  app.put<{
    Body: {
      name: string;
      lastName: string;
      password: string;
    };
  }>(
    "/me",
    {
      preHandler: authenticate,
    },
    updateStudent
  );

  app.get(
    "/dashboard",
    {
      preHandler: authenticate,
    },
    dashboard
  );
}
