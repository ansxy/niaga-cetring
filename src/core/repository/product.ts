import { PrismaClient } from "@prisma/client";
import { Product } from "../entities/product";
import { BaseRepository } from "./BaseRepository";

export interface ProductRepository extends BaseRepository<Product> {}

export class ProductRepo
  extends BaseRepository<Product>
  implements ProductRepository
{
  constructor() {
    super();
  }

  protected getModel(): PrismaClient["product"] {
    return this.prisma.product;
  }

  // async findBy(filter: any): Promise<Product | null> {
  //   return this.prisma.product.findFirst({ where: filter });
  // }

  // async findAllBy(filter: any): Promise<Product[]> {
  //   return this.prisma.product.findMany({ where: filter });
  // }
}
