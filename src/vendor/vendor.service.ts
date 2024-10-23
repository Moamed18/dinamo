import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor, VendorDocument } from './entity/vendor.entity';
import { Model } from 'mongoose';
import { LoginDto, OpeningDto, SignUpDto, UpdatePassDto, UpdateVendorDto } from './dto/vendor.dto';


@Injectable()
export class VendorService {
    constructor(
        @InjectModel(Vendor.name) public orderModel: Model<VendorDocument>,
    ) { }

    async signUp(dto: SignUpDto) {

    }
    async login(dto: LoginDto) {
    }
    async logOut() {
    }
    async updateVendor(dto: UpdateVendorDto) {
    }
    async changePassword(dto: UpdatePassDto) {
    }
    async getProfile() {
    }
    async deleteProfile() {
    }

    async updateOpen(dto:OpeningDto) {
    }

    async getVendorsBySection(sectionId:string) {
    }

    async getVendorById(vendorId:string) {
    }
}
