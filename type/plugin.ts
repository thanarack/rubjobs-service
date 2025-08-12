import { Context } from "elysia";
import { PrismaClient } from "@prisma/client";

export type JWT = {
  sign: (data: any) => Promise<string>;
  verify: (token: string) => Promise<any>;
};

export type ReqPluginContext = Context & {
  jwt: JWT;
  db: PrismaClient;
};
