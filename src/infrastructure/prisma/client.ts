// src/infrastructure/prisma/PrismaClientSingleton.ts
import { PrismaClient } from "@prisma/client";

export class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {} // Make constructor private to prevent instantiation

  static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient();
    }

    return PrismaClientSingleton.instance;
  }
}
