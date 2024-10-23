import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entity/category.entity';
import { Model } from 'mongoose';
import { CreateDto, UpdateDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) public categoryModel: Model<CategoryDocument>,
    ) { }

    async create(dto: CreateDto) {
    }

    async update(categoryId: string, dto: UpdateDto) {
    }

    async delete(categoryId: string) {
    }

    async getVendorCategories() {
    }

}
