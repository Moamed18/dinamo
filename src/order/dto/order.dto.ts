import { IsMongoId, IsNotEmpty,IsString } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsMongoId()
    cart: string;

    @IsNotEmpty()
    @IsMongoId()
    address: string;

    @IsNotEmpty()
    @IsString()
    paymentMethod: string;

}

export class UpdateOrderStatusDto {
    @IsNotEmpty()
    @IsString()
    status: string;
}

export class UpdatePaymentStatusDto {
    @IsNotEmpty()
    @IsString()
    paymentStatus: string;
}






