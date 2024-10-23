import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto, UpdateQuantityDto} from './dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @Patch('')
    async addToCart(@Body() dto: AddToCartDto) {
        return this.cartService.addToCart(dto);
    }

    @Patch(':id/updateQuantity')
    async update(@Param('id') productId: string, @Body() dto: UpdateQuantityDto) {
        return this.cartService.updateQuantity(productId,dto);
    }

    @Patch(':id/deleteFromCart')
    async deleteFromCart(@Param('id') productId: string) {
        return this.cartService.deleteFromCart(productId);
    }

    @Patch('clearCart')
    async clearCart() {
        return this.cartService.clearCart();
    }

    @Get('')
    async getCart() {
        return this.cartService.getCart();
    }
}
