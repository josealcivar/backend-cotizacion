import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Credito } from '../../database/entities/creditos/credito.entity';

import {
  CreateCreditoDto,
  FilterCreditoDto,
  UpdateCreditoDto,
} from './../dtos/credito.dto';
import { Repository, Between, FindConditions } from 'typeorm';
// import { BrandsService } from './../services/brands.service';

@Injectable()
export class CreditoService {
  constructor(
    @InjectRepository(Credito) private creditoRepo: Repository<Credito>,
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

  findAll(params?: FilterCreditoDto) {
    if (params) {
      const where: FindConditions<Credito> = {};
      const { limit, offset } = params;

      return this.creditoRepo.find({
        where,
        take: limit,
        skip: offset,
      });
    }
  }

  async findOne(id: number) {
    const rpta = await this.creditoRepo.find();

    const product = await this.creditoRepo.findOne(id, {});
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateCreditoDto) {
    const newCredito = this.creditoRepo.create(data);

    // newCredito.categories = categories;

    return this.creditoRepo.save(newCredito);
  }

  async update(id: number, changes: UpdateCreditoDto) {
    const credito = await this.creditoRepo.findOne(id);

    this.creditoRepo.merge(credito, changes);
    return this.creditoRepo.save(credito);
  }
}
