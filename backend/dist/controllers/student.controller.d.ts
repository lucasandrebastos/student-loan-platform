import { FastifyReply, FastifyRequest } from "fastify";
import { GetMeInput, LoginInput, CreateStudentInput, PutMeInput } from "../schemas/student.schema";
export declare function createStudent(req: FastifyRequest<{
    Body: CreateStudentInput;
}>, reply: FastifyReply): Promise<never>;
export declare function loginStudent(req: FastifyRequest<{
    Body: LoginInput;
}>, reply: FastifyReply): Promise<never>;
export declare function getStudent(req: FastifyRequest<{
    Body: GetMeInput;
}>, reply: FastifyReply): Promise<never>;
export declare function updateStudent(req: FastifyRequest<{
    Body: PutMeInput;
}>, reply: FastifyReply): Promise<never>;
