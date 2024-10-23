import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { LoginDto, SignUpDto, UpdatePassDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('register')
    async create(@Body() dto: SignUpDto) {
        return this.userService.signUp(dto);
    }

    @Post('logIn')
    async login(@Body() dto: LoginDto) {
        return this.userService.login(dto);
    }

    @Post('logOut')
    async logOut() {
        return this.userService.logOut();
    }

    @Put('updateData')
    async updateUser(@Body() dto: UpdateUserDto) {
        return this.userService.updateUser(dto);
    }

    @Put('change-password')
    async changePassword(@Body() dto: UpdatePassDto) {
        return this.userService.changePassword(dto);
    }

    @Get('profile')
    async getProfile() {
        return this.userService.getProfile();
    }

    @Get('deleteProfile')
    async deleteProfile() {
        return this.userService.deleteProfile();
    }
}
