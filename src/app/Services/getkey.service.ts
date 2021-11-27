import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmail } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class GetkeyService {

  constructor(private http:HttpClient) { }
 
  url:string="http://localhost:4000/v1/users";

  async PostUser(email:IEmail):Promise<any>
  {
    return await this.http.post<IEmail>(this.url,email,    {
      headers: new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        })}
  ).toPromise();
  }
}
