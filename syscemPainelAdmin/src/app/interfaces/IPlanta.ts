import { IInterface } from './IInterface';

export interface IPlanta extends IInterface{
    nomeCientifico:  string;
    nomePopular: string;
    imagem: string;
    propriedades: string;
    utilidade: string;
}