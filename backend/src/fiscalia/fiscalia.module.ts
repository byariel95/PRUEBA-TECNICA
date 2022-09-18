import { Module } from '@nestjs/common';
import { FiscaliaService } from './fiscalia.service';
import { FiscaliaController } from './fiscalia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fiscalia } from '../database/entities/fiscalia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fiscalia])],
  controllers: [FiscaliaController],
  providers: [FiscaliaService]
})
export class FiscaliaModule {}
