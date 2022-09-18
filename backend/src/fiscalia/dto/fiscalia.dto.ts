
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFiscaliaDto 
{
    @IsString()
    @ApiProperty({type:String, description: "nombre de la fiscalia",required: true})
    nombre: string

    @IsString() 
    @ApiProperty({description: "ubicacion de la fiscalia",required: true})
    ubicacion: string

    @IsString()
    @ApiProperty({description: "telefono de la fiscalia",required: true})
    telefono: string

}

export class UpdateFiscaliaDto extends PartialType(CreateFiscaliaDto) {}
