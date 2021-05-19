import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MsgItemIntf, MsgService} from '../../../services/msg.service';

@Component({
  selector: 'app-msg-item',
  templateUrl: './msg-item.component.html',
  styleUrls: ['./msg-item.component.css']
})
export class MsgItemComponent implements OnInit {

  @Input() itemData!: MsgItemIntf;
  @Output() itemClick: EventEmitter<MsgItemIntf> = new EventEmitter<MsgItemIntf>();

  constructor() { }

  ngOnInit(): void {
  }

  onTitleClick() {
    this.itemClick.emit(this.itemData);
    // console.log(this.itemData)
  }
}
