import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";


export type VendorDocument = Vendor & Document;

export class Vendor {

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
        unique: true
    })
    email: string;

    @Prop({ type: String })
    phoneNumber: string;


    @Prop({ type: String, })
    password: string;

    @Prop({
        type: String
    })
    image: string;

    @Prop({
        type: String
    })
    about: string;


    @Prop({
        type: String
    })
    arrivalTime: string;

    @Prop({
        type: String
    })
    deliveryCost: string;

    @Prop({
        type: String
    })
    workingHours: string;

    @Prop({ type: Boolean, default: true })
    open: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Section' })
    section: string

    @Prop({ type: Boolean, default: false })
    removed: boolean;

}

export const VendorSchema = SchemaFactory.createForClass(Vendor);