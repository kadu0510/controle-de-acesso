import Redis from "ioredis";

export const database = new Redis(process.env.REDIS_URL!);
