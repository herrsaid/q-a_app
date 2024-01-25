import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user.service';

@Controller('user')
export class UserController {
    constructor(private User:UserService){}
    @Post()
    async create(@Body() body: any)
    {
        console.log(body);
        await this.User.createUser(body);
    }
}
