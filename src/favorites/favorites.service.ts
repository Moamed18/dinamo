import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Favorites, FavoritesDocument } from './entity/favorites.entity';
import { Model } from 'mongoose';
import { AddProductDto, AddVendorDto} from './dto/favorites.dto';

@Injectable()
export class FavoritesService {
    constructor(
        @InjectModel(Favorites.name) public favoritesModel: Model<FavoritesDocument>,
    ) { }

    async addVendor(dto:AddVendorDto) {
    }

    async addProduct(dto:AddProductDto) {
    }

    async deleteVendor(vendorId:string) {
    }

    async deleteProduct(productId:string) {
    }

    async getfavoriteVendors() {
    }

    async getfavoriteProducts() {
    }

    async clear() {
    }

    
}
