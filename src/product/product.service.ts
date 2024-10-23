import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entity/product.entity";
import { CreateDto, UpdateDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) public productModel: Model<ProductDocument>,
    ) { }

    async create(dto: CreateDto) {
    }

    async update(productId: string, dto: UpdateDto) {
    }

    async delete(productId: string) {
    }

    async getProductsByVendor(vendorId: string) {

    }

    async getProductsByCategory(categoryId: string) {

    }

    async getOneProduct(productId: string) {
    }
}