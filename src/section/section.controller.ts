import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateDto, UpdateDto } from './dto/section.dto';

@Controller('section')
export class SectionController {
    constructor(private sectionService: SectionService) { }

    @Post('')
    async create(@Body() dto: CreateDto) {
        return this.sectionService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') sectionId: string, @Body() dto: UpdateDto) {
        return this.sectionService.update(sectionId,dto);
    }

    @Delete(':id')
    async delete(@Param('id') sectionId: string) {
        return this.sectionService.delete(sectionId);
    }

    @Get('')
    async getAllSections() {

    }
}
