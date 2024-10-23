import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";
import { OrderStatus, PaymentMethod, PaymentStatus } from "./order.schema";

export type OrderDocument = Order & Document;

export class Order {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;


    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    })
    user: string

    @Prop([{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }])
    vendors: [string]

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    })
    toAddress: string

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }])
    fromAddress: [string]

    @Prop({
        type: String,
        trim: true,
    })
    orderId: string;

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
    totalPrice: number;

    @Prop({
        type: Number
    })
    texs: number;

    @Prop({
        type: Number
    })
    deliveryPrice: number;

    @Prop({
        type: Number
    })
    totalAmount: number;

    @Prop({
        type: String,
        enum: OrderStatus,
        default: OrderStatus.PENDING
    })
    status: OrderStatus;

    @Prop({
        type: String,
        enum: PaymentStatus,
        default: PaymentStatus.UNPAID
    })
    paymentStatus: PaymentStatus;

    @Prop({
        type: String,
        enum: PaymentMethod,
        default: PaymentMethod.CASH_ON_DELIVERY
    })
    paymentMethod: PaymentMethod;

}

export const OrderSchema = SchemaFactory.createForClass(Order);