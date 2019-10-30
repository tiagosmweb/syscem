import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule, MatIconModule, MatButtonModule, 
        MatSidenavModule, MatListModule,  MatTableModule, MatCardModule, MatInputModule, MatSnackBarModule, MatPaginatorModule, MatPaginatorIntl, MatSelectModule, 
      
                                                            } from '@angular/material';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getPaginatorIntl } from './shared/paginator-intl';
import { PlantaComponent } from './pages/planta/planta.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { InputFileComponent } from './components/input-file/input-file.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsDashboardComponent,
    HomeComponent,
    LoginComponent,
    PlantaComponent,
    PlantasComponent,
    InputFileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [{
    provide: MatPaginatorIntl, useValue: getPaginatorIntl()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
