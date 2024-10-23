import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import bcrypt from 'bcrypt';

export type UserDocument = User & Document;

export class User {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({
        type: String,
        trim: true,
    })
    firstName: string;

    @Prop({
        type: String,
        trim: true,
    })
    lastName: string;

    @Prop({
        type: String,
        trim: true,
        unique: true
    })
    email: string;

    @Prop({ type: String })
    phoneNumber: string;

    @Prop({ type: Date, required: false })
    birthDate: Date;

    @Prop({ type: String, })
    password: string;

    @Prop({ type: Boolean, default: false })
    removed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.passwordCheck = async function (password: string) {
    const isPassword = await bcrypt.compare(password, this.password);
    return isPassword;
};