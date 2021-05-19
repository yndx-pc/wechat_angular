import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'this is yellow';
  color = 'red';
  num = 1;
  array = [
    {name: 'zhang', age: 12},
    {name: 'li', age: 23}];
  flag = true;
  public test(): void{
    if (this.num % 3 === 0) {
      this.title = 'this is yellow';
      this.color = 'red';
    } else if (this.num % 3 === 1){
      this.title = 'this is red';
      this.color = 'blue';
    } else {
      this.title = 'this is blue';
      this.color = 'yellow';
    }
    this.num++;
  }

  ifTest(): void {
    this.flag = !this.flag;
    this.test();
  }
  ngOnInit(): void {
  }
}
