"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = studentRoutes;
const student_controller_1 = require("../controllers/student.controller");
async function studentRoutes(app) {
    app.post("/register", student_controller_1.createStudent);
    app.post("/login", student_controller_1.loginStudent);
    app.post("/me", student_controller_1.getStudent);
    app.put("/me", {
        onRequest: [app.authenticate],
    }, student_controller_1.updateStudent);
}
