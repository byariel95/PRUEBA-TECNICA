import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Fiscalia } from "./entities/fiscalia.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory 
{
    private entities = [Fiscalia];

    public createTypeOrmOptions () : TypeOrmModuleOptions {
        return {
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            database: 'MP-PRUEBA',
            username: 'sa',
            password: 'Bama1995',
            entities: this.entities,
            options: { encrypt: false },
            synchronize: false
        }
    }
}