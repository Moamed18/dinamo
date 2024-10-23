import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    details: string;

    @IsOptional()
    @IsString()
    extraDetails: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsBoolean()
    defaultAddress: boolean;
}

export class UpdateDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    details: string;

    @IsOptional()
    @IsString()
    extraDetails: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsBoolean()
    defaultAddress: boolean;
}

export class MakeDefaultDto {
    @IsNotEmpty()
    @IsBoolean()
    defaultAddress: boolean;
}




