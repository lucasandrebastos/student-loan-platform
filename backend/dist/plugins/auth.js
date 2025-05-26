"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authPlugin = async (app) => {
    app.decorate("authenticate", async (request, reply) => {
        try {
            await request.jwtVerify();
        }
        catch (err) {
            return reply.send(err);
        }
    });
};
exports.default = authPlugin;
