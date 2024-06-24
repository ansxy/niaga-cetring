// src/core/repositories/BaseRepository.ts
import { PrismaClientSingleton } from "@/infrastructure/prisma/client";
import { PrismaClient } from "@prisma/client";

export abstract class BaseRepository<T> {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaClientSingleton.getInstance();
  }

  protected abstract getModel(): any;

  async save(entity: T): Promise<T> {
    return this.getModel().create({ data: entity }) as unknown as T;
  }

  async update(entity: T): Promise<T> {
    return this.getModel().update({
      where: { id: (entity as any).id },
      data: entity,
    }) as unknown as T;
  }

  async delete(id: number): Promise<void> {
    await this.getModel().delete({ where: { id } });
  }

  async findById(id: number): Promise<T | null> {
    return this.getModel().findUnique({ where: { id } }) as unknown as T;
  }

  async findAll(): Promise<T[]> {
    return this.getModel().findMany() as unknown as T[];
  }
}
