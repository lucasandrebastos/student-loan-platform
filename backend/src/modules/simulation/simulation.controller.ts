import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateSimulationInput,
  UpdateSimulationInput,
} from "./simulation.schema";
import prisma from "../../utils/prisma";
import { StudentPayload } from "../../@types/fastify-jwt";
import { simulationRepository } from "./simulation.repository";

export async function createSimulation(
  req: FastifyRequest<{
    Body: CreateSimulationInput;
  }>,
  reply: FastifyReply
) {
  const { total_value, number_of_installments, monthly_interest } = req.body;

  const { id } = req.user as StudentPayload;

  function calculatePMT(PV: number, n: number, iPercentual: number) {
    const i = iPercentual / 100;
    const PMT = PV * (i / (1 - Math.pow(1 + i, -n)));
    return PMT;
  }
  const monthlyInstallmentAmount = calculatePMT(
    Number(total_value),
    Number(number_of_installments),
    Number(monthly_interest)
  );

  const simulation = await simulationRepository.createSimulation(
    Number(total_value),
    Number(number_of_installments),
    Number(monthly_interest),
    Number(monthlyInstallmentAmount),
    id
  );
  console.log("simulation", simulation);

  return reply.status(201).send(simulation);
}

//get simulations by studentId
export async function getSimulations(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.user as StudentPayload;
  if (!id) {
    return reply.status(400).send({
      message: "Student ID is required",
    });
  }

  const simulations = await prisma.simulation.findMany({
    where: {
      studentId: id,
    },
  });

  return reply.status(200).send(simulations);
}

export async function updateSimulation(
  req: FastifyRequest<{
    Body: UpdateSimulationInput;
  }>,
  reply: FastifyReply
) {
  const { total_value, number_of_installments, monthly_interest, id } =
    req.body;

  const simulation = await prisma.simulation.update({
    where: {
      id: id,
    },
    data: {
      total_value: total_value,
      number_of_installments: number_of_installments,
      monthly_interest: monthly_interest,
    },
  });
  if (!simulation) {
    return reply.code(401).send({
      message: "Simulation not found",
    });
  }

  return reply.status(200).send(simulation);
}

export async function deleteSimulation(
  req: FastifyRequest<{
    Body: { id: string };
  }>,
  reply: FastifyReply
) {
  const { id } = req.body;

  const simulation = await prisma.simulation.delete({
    where: {
      id: id,
    },
  });
  if (!simulation) {
    return reply.code(401).send({
      message: "Simulation not found",
    });
  }

  return reply.status(200).send(simulation);
}
