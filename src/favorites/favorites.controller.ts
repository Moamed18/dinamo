import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { AddProductDto, AddVendorDto} from './dto/favorites.dto';


@Controller('favorite')
export class FavoritesController {
    constructor(private favoriteService: FavoritesService) { }

    @Post('addVendor')
    async addVendor(@Body() dto: AddVendorDto) {
        return this.favoriteService.addVendor(dto);
    }

    @Post('addProduct')
    async addProduct(@Body() dto: AddProductDto) {
        return this.favoriteService.addProduct(dto);
    }

    @Patch(':id/deleteVendor')
    async deleteVendor(@Param('id') vendorId: string) {
        return this.favoriteService.deleteVendor(vendorId);
    }

    @Patch(':id/deleteProduct')
    async deleteProduct(@Param('id') productId: string) {
        return this.favoriteService.deleteProduct(productId);

    }

    @Patch('')
    async clear() {
        return this.favoriteService.clear();

    }

    @Get('getfavoriteVendors')
    async getfavoriteVendors() {
    }

    @Get('getfavoriteProducts')
    async getfavoriteProducts() {
    }
}
