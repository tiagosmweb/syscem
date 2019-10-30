import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { PlantaModel } from '../model/PlantaModel';


@Injectable({
  providedIn: 'root'
})
export class PlantaService  extends BaseService<PlantaModel>{
  constructor(public http: HttpService) {
      super('planta', http);
   }
}
