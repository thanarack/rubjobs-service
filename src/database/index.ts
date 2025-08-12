import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Initialize Prisma client with connection pooling and error handling
const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    transactionOptions: {
      timeout: 10000,
      maxWait: 10000,
    },
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    errorFormat: "pretty",
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

process.on("beforeExit", async () => {
  await db.$disconnect();
});

process.on("SIGINT", async () => {
  await db.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await db.$disconnect();
  process.exit(0);
});

// Before importing this file, check if you can access the database via the context service.
// The database instance is available as request.db, so you usually don't need to import this file.
// Only import this file directly when using the database in standalone functions.
export default db;
