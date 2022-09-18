import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Fiscalia")
export class Fiscalia {
    @PrimaryGeneratedColumn({type: 'integer',name :'id'})
    id: number;

    @Column('text',{name : 'nombre'})
    nombre: string;

    @Column('text',{name : 'ubicacion'})
    ubicacion: string;

    @Column('text',{name : 'telefono'})
    telefono: string;

}