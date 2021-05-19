import {Component, Input, OnInit} from '@angular/core';
// import {MsgItemIntf} from '../msg-list.component';

@Component({
  selector: 'app-msg-test',
  templateUrl: './msg-test.component.html',
  styleUrls: ['./msg-test.component.css']
})
export class MsgTestComponent implements OnInit {

  // @Input() itemData: MsgItemIntf | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
