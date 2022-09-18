import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fiscalia } from '../database/entities/fiscalia.entity';
import { Repository } from 'typeorm';
import { CreateFiscaliaDto, UpdateFiscaliaDto } from './dto/fiscalia.dto';

@Injectable()
export class FiscaliaService {

 constructor(
  @InjectRepository(Fiscalia)
  private readonly fiscaliaRepository :Repository<Fiscalia>
 ){}


  async create(createFiscaliaDto: CreateFiscaliaDto) {
    try {
      
      const fiscalia = this.fiscaliaRepository.create(createFiscaliaDto);
      return await this.fiscaliaRepository.save(fiscalia);
    } catch (error) {
      throw error;
    }

  }

  async findAll() {
    try {
      return await this.fiscaliaRepository.find();
    } catch (error) {
      throw new NotFoundException()
    }
    
  }

  async findOne(id: number) {
    try {
      const fiscalia =  await this.fiscaliaRepository.findOne({
        where:{
          id,
        }
      })
      if(!fiscalia){
        throw new NotFoundException();
      }

      return fiscalia;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateFiscaliaDto: UpdateFiscaliaDto) {
    try {
      const fiscalia = await this.findOne(id);
      const fiscaliaUpdated = {...fiscalia,...updateFiscaliaDto}
      return this.fiscaliaRepository.save(fiscaliaUpdated);

    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: number) {
    try {
      const toDelete = await this.findOne(id);
      this.fiscaliaRepository.remove(toDelete)
      return `fislcalia con ID #${id} Fue Eliminado`;
    } catch (error) {
      throw new BadRequestException()
    }
    
  }
}
