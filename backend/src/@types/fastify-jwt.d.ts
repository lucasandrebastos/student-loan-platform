import "@fastify/jwt";

declare module "fastify" {
  interface FastifyRequest {
    jwt: import("@fastify/jwt").FastifyJWT;
    jwtVerify(): Promise<void>;
    user: StudentPayload;
  }
}
type StudentPayload = {
  id: string;
  email: string;
  name: string;
};

declare module "@fastify/jwt" {
  interface FastifyJWT {
    student: StudentPayload;
  }
}
