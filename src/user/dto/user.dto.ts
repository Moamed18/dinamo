import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { IsMatch } from "./is-match.decorator";

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsDate() 
    @Type(() => Date) 
    birthDate: Date;

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

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsDate() 
    @Type(() => Date) 
    birthDate: Date;  
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



