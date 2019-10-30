import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IMenu } from './interfaces/IMenu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'syscemPainelAdmin';
  isLogged: boolean = false;
  subscrip: Subscription;

  menu: Array<IMenu> = new Array<IMenu>();
  
  constructor(private userService: UserService){

  }

  ngOnInit(): void{
    this.isLogged = this.userService.isStaticLogged;
      this.subscrip = this.userService.isLogged.subscribe(logged => {
      this.isLogged = logged;
    });
    
    this.menu.push({
      group: 'Cadastros',
      items: [
        { icon: 'eco-icon', label: 'Herboteca', url: '/Plantas' }
      ]
    });


  }


}
