import { studentRepository } from "../student/student.repository";
import bcrypt from "bcrypt";
import { RegisterInput, LoginInput } from "./auth.schema";
import { FastifyRequest } from "fastify";
import { signJwt } from "../../utils/jwt";

export const authService = {
  async register({ password, email, name, lastName }: RegisterInput) {
    const user = await studentRepository.findStudentByEmail(email);

    if (user) {
      throw new Error("Student already exists with this email");
    }

    try {
      const hash = await bcrypt.hash(password, 10);
      const student = studentRepository.createStudent(
        email,
        name,
        lastName,
        hash
      );

      return student;
    } catch (error) {
      throw new Error("Error creating student");
    }
  },

  async login({ email, password }: LoginInput) {
    const student = await studentRepository.findStudentByEmail(email);

    if (!student) {
      throw new Error("Invalid email or password");
    }

    const isValidPassword =
      student?.password && (await bcrypt.compare(password, student.password));

    if (!isValidPassword) {
      throw new Error("Invalid email or password");
    }

    return signJwt({
      sub: student.id,
      email: student.email,
      name: student.name,
    });
  },
};
