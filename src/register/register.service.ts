import { Injectable } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';

@Injectable()
export class RegisterService {
    async create(data: CreateRegisterDTO): Promise<string> {
        const {name, email, password, site, phone} = data;
        return `Cliente ${name} cadastrado com sucesso!`;
    }
}
