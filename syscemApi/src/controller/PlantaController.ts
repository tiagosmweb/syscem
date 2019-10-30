import { Request } from "express";
import { BaseController } from "./BaseController";
import { Planta } from "../entity/Planta";
import * as md5 from 'md5';
import { FileHelper } from "../helpers/fileHelper";


export class PlantaController extends BaseController<Planta> {
    constructor(){
        super(Planta, true);
    }

    async one(request: Request) {
        const costumer = await super.one(request);
        delete costumer['password'];
        return costumer;
    }


    async save(request: Request){
        let _planta = <Planta>request.body;
        let { confirmPassword } = request.body;

        super.isRequired(_planta.nomeCientifico, 'O nome científico é obrigatório');
        super.isRequired(_planta.nomePopular, 'O nome popular é obrigatório');
        super.isRequired(_planta.imagem, 'O cadastro da imagem é obrigatório');
        super.isRequired(_planta.propriedades, 'A propriedade é obrigatória');
        super.isRequired(_planta.utilidade, 'A utilidade é obrigatória');




        if(_planta.imagem){
            let pictureCreatedResult = await FileHelper.writePicture(_planta.imagem)
            if(pictureCreatedResult)
            _planta.imagem = pictureCreatedResult
        }


        return super.save(_planta, request); 
    }

    async createPlanta(request: Request){
        let _planta = <Planta>request.body;


        super.isRequired(_planta.nomeCientifico, 'O nome científico é obrigatório');
        super.isRequired(_planta.nomePopular, 'O nome popular é obrigatório');
        super.isRequired(_planta.imagem, 'O cadastro da imagem é obrigatório');
        super.isRequired(_planta.propriedades, 'A propriedade é obrigatória');
        super.isRequired(_planta.utilidade, 'A utilidade é obrigatória');

        
        if(_planta.imagem){
            let pictureCreatedResult = await FileHelper.writePicture(_planta.imagem)
            if(pictureCreatedResult)
            _planta.imagem = pictureCreatedResult
        }
        

        return super.save(_planta, request, true);
    }

}