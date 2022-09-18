import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm.service';


Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({useClass: TypeOrmConfigService})],
})
export class DatabaseModule {}
