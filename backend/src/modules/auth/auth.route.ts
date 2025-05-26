import { FastifyInstance } from "fastify";
import { LoginInput, RegisterInput } from "./auth.schema";
import { registerController, loginController } from "./auth.controller";
export async function authRoutes(app: FastifyInstance) {
  app.post<{ Body: RegisterInput }>("/register", registerController);

  app.post<{ Body: LoginInput }>("/login", loginController);
}
