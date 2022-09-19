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
      
      const newFiscalia = this.fiscaliaRepository.create(createFiscaliaDto);
      const fiscalia = await this.fiscaliaRepository.save(newFiscalia);
      return {
        id:fiscalia.id,
        name:fiscalia.nombre,
        ubication: fiscalia.ubicacion,
        phone: fiscalia.telefono
      }
    } catch (error) {
      throw error;
    }

  }

  async findAll() {
    try {
      const data =await this.fiscaliaRepository.find();
      const response = data.map((fiscalia)=> {
        return {
          id:fiscalia.id,
          name: fiscalia.nombre,
          ubication:fiscalia.ubicacion,
          phone: fiscalia.telefono
        }
      })
      return response;

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

      return {
        id:fiscalia.id,
        name: fiscalia.nombre,
        ubication:fiscalia.ubicacion,
        phone: fiscalia.telefono
      };
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateFiscaliaDto: UpdateFiscaliaDto) {
    try {
      const fiscalia = await this.findOne(id);
      const fiscaliaUpdated = {...fiscalia,...updateFiscaliaDto}
      const fiscaliaSaved = await this.fiscaliaRepository.save(fiscaliaUpdated);
      return {
        id:fiscaliaSaved.id,
        name:fiscaliaSaved.nombre,
        ubication: fiscaliaSaved.ubicacion,
        phone: fiscaliaSaved.telefono
      }

    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: number) {
    try {
      const toDelete = await this.findOne(id);
      this.fiscaliaRepository.remove({id:toDelete.id,nombre:toDelete.name,ubicacion:toDelete.ubication,telefono:toDelete.phone})
      return {
        status : 200,
        message: `fiscalia con ID ${id} Fue Eliminado`
      }
    } catch (error) {
      throw new BadRequestException()
    }
    
  }
}
