import { app } from "./app";

async function startServer() {
  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 8080;
    await app.listen({ port, host: "0.0.0.0" });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
}

startServer();
