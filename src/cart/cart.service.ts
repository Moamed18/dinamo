import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './entity/cart.entity';
import { Model } from 'mongoose';
import { AddToCartDto, UpdateQuantityDto } from './dto/cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart.name) public cartModel: Model<CartDocument>,
    ) { }

    async addToCart(dto: AddToCartDto) {
    }

    async updateQuantity(productId: string, dto: UpdateQuantityDto) {
    }

    async deleteFromCart(productId: string) {
    }

    async clearCart() {
    }

    async getCart() {
    }

}
