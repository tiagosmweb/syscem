import { BaseModel } from './BaseModel';

export class PlantaModel extends BaseModel{
    nomeCientifico:  string;
    nomePopular: string;
    imagem: string;
    propriedades: string; 
    utilidade: string;
}