import { Component, OnInit, ViewChild } from '@angular/core';
import { PlantaModel } from 'src/app/model/plantaModel';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PlantaService } from 'src/app/services/planta.service';
import { Constants } from 'src/app/shared/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.scss']
})
export class PlantasComponent implements OnInit {

  
  columns: string[] = ['Nome Popular', 'Nome Cientifico', 'Propriedades',  'Utilidade', 'uid'];
  dataSource: MatTableDataSource<PlantaModel>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private plantaSrv: PlantaService
  ) { }

  ngOnInit() {
    this.bind();
  }


  async bind() {
    const questions = await this.plantaSrv.GetAll();
    this.dataSource = new MatTableDataSource(questions.data);
    this.dataSource.paginator = this.paginator;
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  async delete(model: PlantaModel): Promise<void> {
    const options: any = { ...Constants.confirm_swal_options, text: `Deseja realmente excluir a planta ${model.nomePopular}` };
    const { value } = await Swal.fire(options);
    if (value) {
      const result = await this.plantaSrv.delete(model.uid);
      if (result.success) {
        this.bind();
      }
    }
  }


}
