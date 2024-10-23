import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateDto, UpdateDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post('')
    async create(@Body() dto: CreateDto) {
        return this.categoryService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') categoryId: string, @Body() dto: UpdateDto) {
        return this.categoryService.update(categoryId, dto);
    }

    @Delete(':id')
    async delete(@Param('id') categoryId: string) {
        return this.categoryService.delete(categoryId);
    }

    @Get('')
    async getVendorCategories() {
        return this.categoryService.getVendorCategories();
    }
}
