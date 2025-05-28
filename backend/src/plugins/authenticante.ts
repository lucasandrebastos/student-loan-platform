import { FastifyReply, FastifyRequest } from "fastify";
import { verifyJwt } from "../utils/jwt";
import {
  checkValidUser,
  getTokenFromHeaders,
} from "../utils/getTokenFromHeaders";
import { StudentPayload } from "../@types/fastify-jwt";

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  try {
    checkValidUser(req, reply);
    const token = getTokenFromHeaders(req.headers.authorization);
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
}
