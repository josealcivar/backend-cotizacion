import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `productos name` })
  readonly producto_sku: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly precio: number;
}

// partialtype pide las mismas validaciones
// pero con que es opcional cada campo
export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

export class FilterProductoDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
