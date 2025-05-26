import { FastifyReply, FastifyRequest } from "fastify";
import { LoginInput, RegisterInput } from "./auth.schema";
import { authService } from "./auth.service";

export async function registerController(
  req: FastifyRequest<{ Body: RegisterInput }>,
  reply: FastifyReply
) {
  const { password, email, name, lastName } = req.body;

  const student = await authService.register({
    password,
    email,
    name,
    lastName,
  });
  return reply.status(201).send({
    student,
    message: "Student registered successfully",
  });
}

export async function loginController(
  req: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  const { email, password } = req.body;
  const token = await authService.login({ email, password }, req);
  return reply.send({ token });
}
