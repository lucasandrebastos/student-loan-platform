import Fastify from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { routes } from "./routes";

import cors from "@fastify/cors";

export const app = Fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

app.register(routes, { prefix: "/api" });
