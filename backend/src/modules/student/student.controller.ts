import { FastifyReply, FastifyRequest } from "fastify";
import { GetMeInput, PutMeInput } from "./student.schema";
import bcrypt from "bcrypt";
import prisma from "../../utils/prisma";
import { studentRepository } from "../student/student.repository";
import { verifyJwt } from "../../utils/jwt";
import { StudentPayload } from "../../@types/fastify-jwt";

export async function getStudent(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.user as StudentPayload;

  const student = await studentRepository.findById(id);
  if (!student) {
    return reply.code(401).send({
      message: "Student not found",
    });
  }
  const { password, ...rest } = student;
  return reply.code(200).send({ ...rest });
}

export async function updateStudent(
  req: FastifyRequest<{
    Body: PutMeInput;
  }>,
  reply: FastifyReply
) {
  const { email, name, lastName, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const student = await prisma.student.update({
    where: { email: email },
    data: {
      name,
      lastName,
      password: hash,
    },
  });

  if (!student) {
    return reply.code(401).send({
      message: "Student not found",
    });
  }

  return reply.code(200).send({ name, lastName, email });
}
