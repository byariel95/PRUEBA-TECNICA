import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { FiscaliaModule } from './fiscalia/fiscalia.module';

@Module({
  imports: [DatabaseModule, FiscaliaModule],
  controllers: [AppController],
})
export class AppModule {}
