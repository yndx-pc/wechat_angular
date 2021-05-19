import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  current = 'Wechat';

  constructor() { }

  ngOnInit(): void {
  }

  test1(): void{
    this.current = 'Wechat';
  }

  test2(): void{
    this.current = 'addressList';
  }

  test3(): void{
    this.current = 'find';
  }

  test4(): void{
    this.current = 'me';
  }
}
