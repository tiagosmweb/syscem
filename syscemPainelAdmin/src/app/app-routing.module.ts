import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './shared/admin.guard';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { PlantaComponent } from './pages/planta/planta.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'Plantas', component: PlantasComponent, canActivate: [AdminGuard]},
  {path: 'Planta/:id', component: PlantaComponent, canActivate: [AdminGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
