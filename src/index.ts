import { Elysia } from "elysia";
import { authRoutes } from "./routes";
import { jwtPlugin, prismaPlugin } from "./plugins";

const app = new Elysia({ prefix: "/api" })
  .use(jwtPlugin)
  .use(prismaPlugin)
  .use(authRoutes)
  .get("/", () => "ok")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
