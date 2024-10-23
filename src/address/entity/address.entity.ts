import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";

export type AddressDocument = Address & Document;

export class Address {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({
        type: String,
        trim: true,
    })
    name: string;


    @Prop({
        type: String,
        trim: true,
    })
    city: string

    @Prop({
        type: String,
        trim: true,
    })
    details: string

    @Prop({
        type: String,
        trim: true,
    })
    extraDetails: string

    @Prop({ type: String })
    phoneNumber: string;

    @Prop({ type: Boolean, default: false })
    defaultAddress: boolean;


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' })
    vendor: string

}

export const AddressSchema = SchemaFactory.createForClass(Address);