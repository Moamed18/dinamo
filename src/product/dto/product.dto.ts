import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @IsNotEmpty()
    @IsString()
    size: string;

    @IsNotEmpty()
    @IsMongoId()
    category: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })  
    images: string[];
}

export class UpdateDto {
    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    stock: number;

    @IsOptional()
    @IsString()
    size: string;

    @IsOptional()
    @IsMongoId()
    category: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })  
    images: string[];
}

export class UpdateStockDto {
    @IsNotEmpty()
    @IsNumber()
    stock: number;
}






