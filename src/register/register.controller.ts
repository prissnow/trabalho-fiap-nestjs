import { Body, Controller, Post } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor (private readonly registerService: RegisterService){}

    @Post()
    create(@Body() req:CreateRegisterDTO) {
        return this.registerService.create(req);
    }
}
