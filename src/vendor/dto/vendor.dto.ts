import { Type } from "class-transformer";
import {IsBoolean, IsDate, IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { IsMatch } from "./is-match.decorator";

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsMongoId()
    section: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsMatch('password', { message: 'Passwords do not match' })
    confirmPassword: string;

}

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UpdateVendorDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsString()
    image: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    about: string;

    @IsOptional()
    @IsString()
    arrivalTime: string;

    @IsOptional()
    @IsString()
    deliveryCost: string;

    @IsOptional()
    @IsString()
    workingHours: string;
}

export class UpdatePassDto {
    @IsNotEmpty()
    @IsString()
    oldPassword: string;
    
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsMatch('password', { message: 'Passwords do not match' })
    confirmPassword: string;
}

export class OpeningDto {
    @IsNotEmpty()
    @IsBoolean()
    open: boolean;
}





