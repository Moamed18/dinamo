import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateDto, UpdateDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post('')
    async create(@Body() dto: CreateDto) {
        return this.productService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') productId: string, @Body() dto: UpdateDto) {
        return this.productService.update(productId, dto);
    }

    @Delete(':id')
    async delete(@Param('id') productId: string) {
        return this.productService.delete(productId);
    }

    @Get(':id/getProductsByVendor')
    async getProductsByVendor(@Param('id') vendorId: string) {
        return this.productService.getProductsByVendor(vendorId);
    }

    @Get(':id/getProductsByCategory')
    async getProductsByCategory(@Param('id') categoryId: string) {
        return this.productService.getProductsByCategory(categoryId);
    }

    @Get(':id/getOneProduct')
    async getOneProduct(@Param('id') productId: string) {
        return this.productService.getOneProduct(productId);
    }

}
