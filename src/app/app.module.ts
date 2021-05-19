import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import {MainTitleComponent} from './main/main-title/main-title.component';
import { MsgListComponent } from './main/msg-list/msg-list.component';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { MsgItemComponent } from './main/msg-list/msg-item/msg-item.component';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import { MsgTestComponent } from './main/msg-list/msg-test/msg-test.component';
import {NzInputModule} from 'ng-zorro-antd/input';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainMenuComponent,
    MainTitleComponent,
    MsgListComponent,
    MsgItemComponent,
    MsgTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzSpaceModule,
    NzButtonModule,
    NzMessageModule,
    NzIconModule,
    NzAvatarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
