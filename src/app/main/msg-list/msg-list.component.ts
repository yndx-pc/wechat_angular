import { Component, OnInit } from '@angular/core';
import {MsgItemIntf, MsgService} from '../../services/msg.service';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent implements OnInit {

  msgList: MsgItemIntf[] | undefined;
  // msgList: MsgItemIntf[] = [
  //   {id: "1", title: "test1", sender: "user1", sendTime: new Date()},
  //   {id: "2", title: "test2", sender: "user2", sendTime: new Date()},
  //   {id: "3", title: "test3", sender: "user3", sendTime: new Date()},
  // ];

  constructor(private msgService: MsgService) {
    this.msgService.getMsgList().subscribe(
      (data)=>{
        this.msgList = data;
      }
    )
  }

  ngOnInit(): void {
  }

  onItemClick(item: any) {
    console.log(item)
  }
}


