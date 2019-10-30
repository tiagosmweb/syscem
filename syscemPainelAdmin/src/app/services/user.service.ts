import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { BaseService } from '../base/base.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService<any> {

    private loginSubject = new Subject<boolean>(); 

    constructor(public http: HttpService){
        super('users', http);
    }
    
    login(email: string, password: string): Promise<IResultHttp>{
        return this.http.post(`${environment.url_api}/users/auth`,{ email, password});
    }
   
    configureLogin(info: any): void{
        const {token, user} = info.data;
        localStorage.setItem('syscem:token', token);
        localStorage.setItem('syscem:user', JSON.stringify(user));
        this.loginSubject.next(this.isStaticLogged);
    }

    get isLogged(): Observable<boolean>{
        return this.loginSubject.asObservable();
    }

    get isStaticLogged(): boolean{
        return !!localStorage.getItem('syscem:token');
    }

    static get token(): string{
        return localStorage.getItem('syscem:token');
    }


}
