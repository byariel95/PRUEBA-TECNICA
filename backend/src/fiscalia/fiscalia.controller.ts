import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFiscaliaDto, UpdateFiscaliaDto } from './dto/fiscalia.dto';
import { FiscaliaService } from './fiscalia.service';

@ApiTags('Modulo de Fiscalia')
@Controller('fiscalia')
export class FiscaliaController {
  constructor(private readonly fiscaliaService: FiscaliaService) {}

  @Post()
  create(@Body() createFiscaliaDto: CreateFiscaliaDto) {
    return this.fiscaliaService.create(createFiscaliaDto);
  }

  @Get()
  findAll() {
    return this.fiscaliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.fiscaliaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateFiscaliaDto: UpdateFiscaliaDto) {
    return this.fiscaliaService.update(id, updateFiscaliaDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.fiscaliaService.remove(id);
  }
}

