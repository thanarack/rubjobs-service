import { Elysia } from "elysia";
import { AuthService } from "../services/auth/auth.service";

export const authRoutes = (app: Elysia) => {
  return app.group("/auth", (auth) => {
    return auth.post("/singin", AuthService.signin);
  });
};