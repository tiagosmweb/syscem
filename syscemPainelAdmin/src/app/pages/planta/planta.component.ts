import { Component, OnInit } from '@angular/core';
import { PlantaModel } from 'src/app/model/plantaModel';
import { PlantaService } from 'src/app/services/planta.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FileManager } from 'src/app/components/input-file/input-file.component';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss']
})
export class PlantaComponent implements OnInit {

  model: PlantaModel = new PlantaModel();

  constructor(
    private plantaSrv: PlantaService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p.id));
  } 
  
 
  async getId(uid: string): Promise<void>{
    if(uid === 'new'){ return; }
    const result = await this.plantaSrv.GetById(uid);
    this.model = result.data as PlantaModel;
  }

  async save(): Promise<void>{
    const result = await this.plantaSrv.post(this.model);
    if(result.success){
      this.matSnackBar.open('Planta salvo com Sucesso', undefined, { duration: 3000});
      this.router.navigateByUrl('/Plantas');
    }
  }

  selectedFile(file: FileManager): void {
    if (file.base64Data) {
      this.model.imagem = file.base64Data;
    }
  }

}
