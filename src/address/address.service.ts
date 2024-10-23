import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from './entity/address.entity';
import { Model, ObjectId } from 'mongoose';
import { CreateDto, MakeDefaultDto, UpdateDto } from './dto/address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectModel(Address.name) public addressModel: Model<AddressDocument>,
    ) { }

    async create(dto:CreateDto) {
    }

    async update(addressId:string,dto:UpdateDto) {
    }

    async delete(addressId:string) {
    }

    async getAllAddress() {
    }

    async makeAddressDefault(addressId:string,dto:MakeDefaultDto) {
    }
}
