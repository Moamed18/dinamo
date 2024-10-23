import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";


export type CategoryDocument = Category & Document;

export class Category {

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
    
    @Prop({ type: String })
    image: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' })
    vendor: string
}

export const CategorySchema = SchemaFactory.createForClass(Category);