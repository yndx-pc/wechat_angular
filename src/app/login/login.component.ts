import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  second = 0;
  flag = false;
  userName: string = "";
  userPassword: string = "";
  msgText: string = "";
  test(): boolean{

    this.flag = true;
    return this.flag;
  }

  constructor(
    private msgService: NzMessageService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onLoad(): void{
    if (this.userName.length == 0 || this.userPassword.length == 0){
      // this.msgService.warning("未输入用户名或密码！");
      // alert("未输入用户名或密码！")
      this.msgText = "未输入用户名或密码！";
      return;
    }

    this.router.navigate(["/main"])
  }
}
