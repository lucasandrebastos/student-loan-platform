import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { updateStudent, getStudent, dashboard } from "./student.controller";
import { authenticatite } from "../../plugins/authenticante";

export async function studentRoutes(app: FastifyInstance) {
  app.get(
    "/me",
    {
      preHandler: authenticatite,
    },
    getStudent
  );

  app.put("/me", updateStudent);

  app.get(
    "/dashboard",
    {
      preHandler: authenticatite,
    },
    dashboard
  );
}
