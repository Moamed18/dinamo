import {IsNotEmpty, IsString } from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    image: string;
}

export class UpdateDto {
    @IsString()
    name: string;

    @IsString()
    image: string;
}






