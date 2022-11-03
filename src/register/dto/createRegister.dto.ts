import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRegisterDTO {    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    site: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(15)
    phone: number;
}