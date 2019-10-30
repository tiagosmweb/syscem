import {Entity, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";


@Entity({name: 'planta'})
export class Planta extends BaseEntity{
   
    @Column({type: 'varchar', length: 200 })
    nomeCientifico: string;
    
    @Column({type: 'varchar', length: 200 })
    nomePopular: string;

    @Column({type: 'varchar', length: 30000 })
    imagem: string;    
    
    @Column({type: 'text' })
    propriedades: string;    
    
    @Column({type: 'mediumtext', nullable: true })
    utilidade: string;    

}
