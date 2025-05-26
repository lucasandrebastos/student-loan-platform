import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { routes } from "./routes";
import { verifyJwt } from "./utils/jwt";

export const app = Fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(routes, { prefix: "/api" });
