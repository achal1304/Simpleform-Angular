import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetkeyService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:8080/v1/healthcheck";

  async PostUser(email:string):Promise<any>
  {
    return await this.http.post<string>(this.url,email,    {
      headers: new HttpHeaders({
        })}
  ).toPromise();
  }
}
