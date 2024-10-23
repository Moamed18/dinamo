import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddVendorDto {
    @IsNotEmpty()
    @IsMongoId()
    vendor: string;
}

export class AddProductDto {
    @IsNotEmpty()
    @IsMongoId()
    product: string;
}




