import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { FiscaliaModule } from './fiscalia/fiscalia.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule, 
    FiscaliaModule],
  controllers: [AppController],
})
export class AppModule {}
