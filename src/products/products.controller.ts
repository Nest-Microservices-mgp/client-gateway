import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Product created successfully';
  }

  @Get()
  findAllProducts() {
    return this.productClient.send({ cmd: 'find_all_products' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Product details for ID: ${id}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `Product with ID: ${id} deleted successfully`;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return `Product with ID: ${id} updated successfully`;
  }
}
