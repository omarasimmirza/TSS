import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAccount } from '../models/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = environment.baseUrl;
  userName:string;
  password:string;

  constructor(private http:HttpClient) { }

  login(user: UserAccount):Observable<any> {

   return this.http.get(this.url + `/authenticate/${user.userName}/${user.password}`);
   //return this.http.get("http://192.168.58.2:30334/paradigmSoft" + `/authenticate/${user.userName}/${user.password}`);
  }
}