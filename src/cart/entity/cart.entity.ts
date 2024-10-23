import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";


export type CartDocument = Cart & Document;

export class Cart {
    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop([{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true }
    }])
    items: Array<{
        product: mongoose.Schema.Types.ObjectId,
        quantity: number,
        totalPrice: number
    }>;

    @Prop({
        type: Number
    })
    totalAmount: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string
}

export const CartSchema = SchemaFactory.createForClass(Cart);