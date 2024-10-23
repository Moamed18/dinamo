import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto, SignUpDto, UpdatePassDto, UpdateUserDto } from './dto/user.dto';
import { User, UserDocument } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) public userModel: Model<UserDocument>,
    ) { }
    async signUp(dto: SignUpDto) {

    }
    async login(dto: LoginDto) {
    }
    async logOut() {
    }
    async updateUser(dto: UpdateUserDto) {
    }
    async changePassword(dto: UpdatePassDto) {
    }
    async getProfile() {
    }
    async deleteProfile() {
    }
}
