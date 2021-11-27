import { Component, OnInit } from '@angular/core';
import { GetkeyService } from '../Services/getkey.service';

@Component({
  selector: 'app-getkey',
  templateUrl: './getkey.component.html',
  styleUrls: ['./getkey.component.css']
})
export class GetkeyComponent implements OnInit {

  userEmail:string = ""
  userKey:string = "sdsdweefwedw"

  constructor(private obj:GetkeyService) { }

  ngOnInit(): void {
  }

  async PostEmail(userEmail:string):Promise<any>{
    console.log("Post user called");
    this.userKey =await this.obj.PostUser(userEmail);
  }

}
