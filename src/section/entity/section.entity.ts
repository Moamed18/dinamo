import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";


export type SectionDocument = Section & Document;

export class Section {

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
    
  
}

export const SectionSchema = SchemaFactory.createForClass(Section);