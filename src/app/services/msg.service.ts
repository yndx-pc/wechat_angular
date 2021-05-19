import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) { }

  getMsgList() {
    return this.http.get<MsgItemIntf[]>("");
  }
}

export interface MsgItemIntf{
  id: string;
  title: string;
  sender: string;
  sendTime: Date;
}
