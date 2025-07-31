import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Product created successfully';
  }

  @Get()
  findAllProducts() {
    return 'List of all products';
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
