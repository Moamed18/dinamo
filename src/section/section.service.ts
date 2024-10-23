import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section, SectionDocument } from './entity/section.entity';
import { Model } from 'mongoose';
import { CreateDto, UpdateDto } from './dto/section.dto';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name) public sectionModel: Model<SectionDocument>,
    ) { }

    async create(dto: CreateDto) {
    }

    async update(sectionId: string, dto: UpdateDto) {
    }

    async delete(sectionId: string) {
    }

    async getAllSections() {
    }

}
