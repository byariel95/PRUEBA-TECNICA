import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Fiscalia } from "./entities/fiscalia.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory 
{
    @Inject(ConfigService)
     private readonly config: ConfigService;
    private entities = [Fiscalia];

    public createTypeOrmOptions () : TypeOrmModuleOptions {
        return {
            type: 'mssql',
            host: this.config.get<string>('DB_HOST'),
            port: parseInt(this.config.get('DB_PORT')),
            database: this.config.get<string>('DB_NAME'),
            username: this.config.get<string>('DB_USER'),
            password: this.config.get<string>('DB_PASSWORD'),
            entities: this.entities,
            options: { encrypt: false },
            synchronize: true
        }
    }
}