import { Component, OnInit } from '@angular/core';

import { IEmail } from 'src/Models/user';
import { GetkeyService } from '../Services/getkey.service';

@Component({
  selector: 'app-getkey',
  templateUrl: './getkey.component.html',
  styleUrls: ['./getkey.component.css']
})
export class GetkeyComponent implements OnInit {

  userEmail:IEmail= {email:""}
  userKey:string = "sdsdweefwedw"

  constructor(private obj:GetkeyService) { }

  ngOnInit(): void {
  }

  async PostEmail():Promise<any>{
    console.log("Post user called");
    console.log(this.userEmail.email);
    this.userKey =await this.obj.PostUser(this.userEmail);
  }

}
