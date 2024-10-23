import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";

export type FavoritesDocument = Favorites & Document;

export class Favorites {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }])
    vendors: [string]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }])
    products: [string]

}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);