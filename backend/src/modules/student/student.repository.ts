import { create } from "domain";
import prisma from "../../utils/prisma";

export const studentRepository = {
  async createStudent(
    email: string,
    name: string,
    lastName: string,
    password: string
  ) {
    const student = await prisma.student.create({
      data: { email, name, lastName, password },
    });
    return student;
  },

  async findStudentByEmail(email: string) {
    const student = await prisma.student.findUnique({
      where: { email: email },
    });
    return student;
  },
};
