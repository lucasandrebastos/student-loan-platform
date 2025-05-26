"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSimulation = createSimulation;
exports.getSimulations = getSimulations;
exports.updateSimulation = updateSimulation;
exports.deleteSimulation = deleteSimulation;
const prisma_1 = __importDefault(require("../utils/prisma"));
async function createSimulation(req, reply) {
    const { total_value, number_of_installments, monthly_interest, studentId } = req.body;
    function calculatePMT(PV, n, iPercentual) {
        const i = iPercentual / 100;
        const PMT = PV * (i / (1 - Math.pow(1 + i, -n)));
        return PMT;
    }
    const monthlyInstallmentAmount = calculatePMT(total_value, number_of_installments, monthly_interest);
    const simulation = await prisma_1.default.simulation.create({
        data: {
            total_value: total_value,
            number_of_installments: number_of_installments,
            monthly_interest: monthly_interest,
            monthly_installment_amount: monthlyInstallmentAmount,
            studentId: studentId,
        },
    });
    return reply.status(201).send(simulation);
}
async function getSimulations(req, reply) {
    if (!req.query.studentId) {
        return reply.status(400).send({
            message: "Student ID is required",
        });
    }
    const { studentId } = req.query;
    const simulations = await prisma_1.default.simulation.findMany({
        where: {
            studentId: studentId,
        },
    });
    return reply.status(200).send(simulations);
}
async function updateSimulation(req, reply) {
    const { total_value, number_of_installments, monthly_interest, id } = req.body;
    const simulation = await prisma_1.default.simulation.update({
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
async function deleteSimulation(req, reply) {
    const { id } = req.body;
    const simulation = await prisma_1.default.simulation.delete({
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
