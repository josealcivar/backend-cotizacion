import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Producto } from '../../database/entities/productos/producto.entity';

import {
  CreateProductoDto,
  FilterProductoDto,
  UpdateProductoDto,
} from './../dtos/producto.dto';
import { Repository, Between, FindConditions } from 'typeorm';
// import { BrandsService } from './../services/brands.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Producto) private productoRepo: Repository<Producto>,
  ) {}
  // private counterId = 1;
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Producto 1',
  //     description: 'lorem lorem',
  //     price: 10000,
  //     stock: 300,
  //     image: 'https://i.imgur.com/U4iGx1j.jpeg',
  //   },
  // ];

  findAll(params?: FilterProductoDto) {
    if (params) {
      const where: FindConditions<Producto> = {};
      const { limit, offset } = params;

      return this.productoRepo.find({
        where,
        take: limit,
        skip: offset,
      });
    }
  }

  async findOne(id: number) {
    const rpta = await this.productoRepo.find();

    const product = await this.productoRepo.findOne(id, {});
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductoDto) {
    const newCredito = this.productoRepo.create(data);

    // newCredito.categories = categories;

    return this.productoRepo.save(newCredito);
  }

  async update(id: number, changes: UpdateProductoDto) {
    const credito = await this.productoRepo.findOne(id);

    this.productoRepo.merge(credito, changes);
    return this.productoRepo.save(credito);
  }
}
