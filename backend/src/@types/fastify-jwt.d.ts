import "@fastify/jwt";

declare module "fastify" {
  interface FastifyRequest {
    jwt: import("@fastify/jwt").FastifyJWT;
  }
  interface FastifyRequest {
    jwtVerify(): Promise<void>;
    user: { sub: string; email: string; iat: number; exp: number };
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
