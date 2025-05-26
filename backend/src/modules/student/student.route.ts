import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { updateStudent, getStudent } from "./student.controller";
import { verifyJwt } from "../../utils/jwt";

export async function studentRoutes(app: FastifyInstance) {
  app.get(
    "/me",
    {
      preHandler: async (req: FastifyRequest, reply: FastifyReply) => {
        try {
          await verifyJwt(
            req.headers.authorization?.replace("Bearer ", "") || ""
          );
          return;
        } catch {
          return reply.code(401).send({ error: "Unauthorized" });
        }
      },
    },
    getStudent
  );
  app.put("/me", updateStudent);
}
