import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSimulationInput, UpdateSimulationInput } from "../schemas/simulation.schema";
export declare function createSimulation(req: FastifyRequest<{
    Body: CreateSimulationInput;
}>, reply: FastifyReply): Promise<never>;
export declare function getSimulations(req: FastifyRequest<{
    Querystring: {
        studentId: string;
    };
}>, reply: FastifyReply): Promise<never>;
export declare function updateSimulation(req: FastifyRequest<{
    Body: UpdateSimulationInput;
}>, reply: FastifyReply): Promise<never>;
export declare function deleteSimulation(req: FastifyRequest<{
    Body: {
        id: string;
    };
}>, reply: FastifyReply): Promise<never>;
