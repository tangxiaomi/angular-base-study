import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { OutsideIntroductionComponent } from './components/outside-introduction/outside-introduction.component';
// 引入相关组件库
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    OutsideIntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    // 导入 ng-zorro-antd 模块
    NgZorroAntdModule
  ],
  providers: [ { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
