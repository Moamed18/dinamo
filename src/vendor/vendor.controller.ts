import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { LoginDto, OpeningDto, SignUpDto, UpdatePassDto, UpdateVendorDto } from './dto/vendor.dto';


@Controller('vendor')
export class VendorController {
    constructor(private vendorService: VendorService) { }


    @Post('register')
    async create(@Body() dto: SignUpDto) {
        return this.vendorService.signUp(dto);
    }

    @Post('logIn')
    async login(@Body() dto: LoginDto) {
        return this.vendorService.login(dto);
    }

    @Post('logOut')
    async logOut() {
        return this.vendorService.logOut();
    }

    @Put('updateData')
    async updateUser(@Body() dto: UpdateVendorDto) {
        return this.vendorService.updateVendor(dto);
    }

    @Put('change-password')
    async changePassword(@Body() dto: UpdatePassDto) {
        return this.vendorService.changePassword(dto);
    }

    @Get('profile')
    async getProfile() {
        return this.vendorService.getProfile();
    }

    @Delete('deleteProfile')
    async deleteProfile() {
        return this.vendorService.deleteProfile();
    }

    @Put('updateOpen')
    async updateOpen(dto: OpeningDto) {
        return this.vendorService.updateOpen(dto);
    }

    @Get(':id/getVendorsBySection')
    async getVendorsBySection(@Param('id') sectionId: string) {
        return this.vendorService.getVendorsBySection(sectionId);
    }

    @Get(':id/getVendorById')
    async getVendorById(@Param('id') vendorId: string) {
        return this.vendorService.getVendorById(vendorId);
    }


}
