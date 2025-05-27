import { FastifyReply, FastifyRequest } from "fastify";

export function getTokenFromHeaders(authorizationHeader: string | undefined) {
  if (!authorizationHeader) return null;
  const token = authorizationHeader.replace("Bearer ", "");

  return token || null;
}

export const checkValidUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = getTokenFromHeaders(request.headers.authorization);
  if (!token) {
    return reply.code(401).send("Unauthorized: No token provided");
  }
};
