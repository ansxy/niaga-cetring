import { ProductRepository } from "../repository/product";

export interface ProductUsecase {
  saveProduct(product: any): Promise<any>;
  updateProduct(product: any): Promise<any>;
  deleteProduct(id: number): Promise<void>;
  findProductById(id: number): Promise<any>;
  findAllProducts(): Promise<any[]>;
}

export class ProductUsecaseImpl implements ProductUsecase {
  private productRepo: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.productRepo = productRepo;
  }

  async saveProduct(product: any): Promise<any> {
    return this.productRepo.save(product);
  }

  async updateProduct(product: any): Promise<any> {
    return this.productRepo.update(product);
  }

  async deleteProduct(id: number): Promise<void> {
    return this.productRepo.delete(id);
  }

  async findProductById(id: number): Promise<any> {
    return this.productRepo.findById(id);
  }

  async findAllProducts(): Promise<any[]> {
    return this.productRepo.findAll();
  }
}
