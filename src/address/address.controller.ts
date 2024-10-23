import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateDto, MakeDefaultDto, UpdateDto } from './dto/address.dto';


@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Post('')
    async create(@Body() dto: CreateDto) {
        return this.addressService.create(dto);
    }
    
    @Put(':id')
    async update(@Param('id') addressId: string, @Body() dto: UpdateDto) {
        return this.addressService.update(addressId,dto);

    }

    @Patch(':id/makeAddressDefault')
    async makeAddressDefault(@Param('id') addressId: string, @Body() dto: MakeDefaultDto) {
        return this.addressService.makeAddressDefault(addressId,dto);

    }


    @Delete(':id')
    async delete(@Param('id') addressId: string) {
        return this.addressService.delete(addressId);

    }

    @Get('')
    async getAddress() {
    }
}
