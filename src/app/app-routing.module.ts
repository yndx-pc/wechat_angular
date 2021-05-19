import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {MainMenuComponent} from './main/main-menu/main-menu.component';
import {MsgListComponent} from './main/msg-list/msg-list.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"main", component: MainComponent, children:[
      {path:"main-menu", component: MainMenuComponent},
      {path:"msg-list", component: MsgListComponent},
      // {path:"msg-test", component: MsgTestComponent}
      {path:"", redirectTo:"msg-list", pathMatch:"full"},
      {path:"**", redirectTo:"msg-list"}
    ]},
  {path:"", redirectTo:"main", pathMatch:"full"},
  {path:"**", redirectTo:"main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    // MsgItemComponent
  ],
  // exports: [RouterModule, MsgItemComponent]
  exports: [RouterModule]
})
export class AppRoutingModule { }
