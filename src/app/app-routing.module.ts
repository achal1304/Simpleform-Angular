import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetkeyComponent } from './getkey/getkey.component';


const routes: Routes = [
  //{path:"",component:GoogleAuthComponent},
  {path:"",component:GetkeyComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }