import {IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddToCartDto {
    @IsNotEmpty()
    @IsMongoId()
    product: string;
}

export class UpdateQuantityDto {
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}






