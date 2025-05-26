"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = createStudent;
exports.loginStudent = loginStudent;
exports.getStudent = getStudent;
exports.updateStudent = updateStudent;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const jwt_1 = require("../utils/jwt");
async function createStudent(req, reply) {
    const { password, email, name, lastName } = req.body;
    const student = await prisma_1.default.student.findUnique({
        where: { email: email },
    });
    if (student) {
        return reply.status(401).send({
            message: "Student already exists",
        });
    }
    try {
        const hash = await bcrypt_1.default.hash(password, 10);
        const student = await prisma_1.default.student.create({
            data: { email, name, lastName, password: hash },
        });
        return reply.status(201).send({
            message: "Student created",
            student,
        });
    }
    catch (error) {
        return reply.code(500).send(error);
    }
}
async function loginStudent(req, reply) {
    const { email, password } = req.body;
    const student = await prisma_1.default.student.findUnique({
        where: { email: email },
    });
    const isValidPassword = (student === null || student === void 0 ? void 0 : student.password) && (await bcrypt_1.default.compare(password, student.password));
    if (!student || !isValidPassword) {
        return reply.code(401).send({
            message: "Invalid email or password",
        });
    }
    const payload = {
        id: student.id,
        email: student.email,
    };
    const accessToken = (0, jwt_1.signJwt)(payload);
    return reply.status(200).send({
        accessToken,
    });
}
async function getStudent(req, reply) {
    const { email } = req.body;
    const student = await prisma_1.default.student.findUnique({
        where: { email: email },
    });
    if (!student) {
        return reply.code(401).send({
            message: "Student not found",
        });
    }
    const { password } = student, rest = __rest(student, ["password"]);
    return reply.code(200).send(Object.assign({}, rest));
}
async function updateStudent(req, reply) {
    const { email, name, lastName, password } = req.body;
    const hash = await bcrypt_1.default.hash(password, 10);
    const student = await prisma_1.default.student.update({
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
