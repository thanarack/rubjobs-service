import db from "../database";

import { Elysia } from "elysia";

export const prismaPlugin = new Elysia().decorate("db", db);
