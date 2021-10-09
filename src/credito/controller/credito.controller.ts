import { Controller } from '@nestjs/common';
import {
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ConflictException,

  // ParseIntPipe,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import {
  CreateCreditoDto,
  UpdateCreditoDto,
  FilterCreditoDto,
} from '../dtos/credito.dto';
import { CreditoService } from './../services/credito.service';

@ApiTags('products')
@Controller('credito')
export class CreditoController {
  constructor(private creditoService: CreditoService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(@Query() params: FilterCreditoDto) {
    // console.log('hola que paso aqui');
    // return this.productsService.findAll(params);
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  // @Get(':productId')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getOne(@Param('productId', ParseIntPipe) productId: number) {
  //   // response.status(200).send({
  //   //   message: `product ${productId}`,
  //   // });
  //   return this.productsService.findOne(productId);
  // }

  @Post()
  create(@Body() payload: CreateCreditoDto) {
    return this.creditoService.create(payload).catch((err) => {
      throw new ConflictException(err.message);
    });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCreditoDto) {
    return this.creditoService.update(id, payload).catch((err) => {
      throw new ConflictException(err.message);
    });
  }

  // @Delete(':id/category/:categoryId')
  // deleteCategory(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('categoryId', ParseIntPipe) categoryId: number,
  // ) {
  //   return this.creditoService.delete(id, categoryId);
  // }
}
