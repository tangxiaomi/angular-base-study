import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
  <h1>{{title}}</h1>

  <div [ngClass]="ngClassHasColor ? 'ngclass-color' : ''">练习Ngclass的使用</div>
  <div [ngStyle]="{'color': 'black', 'font-size': '18px'}">练习Ngstyle的使用</div>

  <ul *ngIf="userRole === 'backend'">
  <li *ngFor="let subject of studySubjects;
      let i  = index;
      let counts = count;
      first as isFirst;
      even as isEven;
      odd as isOdd">
    {{ i+1 }} - {{ subject }}
    <span style="margin-right: 10px">总条数{{counts}}</span>
    <span *ngIf="isOdd">是奇数</span>
    <span *ngIf="isEven">是偶数</span>
    </li>
  </ul>

  <div [ngSwitch]="age">
   <span *ngSwitchCase="'12'">小学毕业</span>
   <span *ngSwitchCase="'18'">高中毕业</span>
   <span *ngSwitchCase="'22'">大学毕业</span>
   <span *ngSwitchDefault>未知</span>
  </div>

  <img [src]="itemImageUrl">
  <button [disabled]="isDisabledBtn">Disabled Button</button>
  <button disabled={{isDisabledBtn}}>Disabled Button</button>
  <span [innerHtml]="spanText"></span>
  <span innerHtml={{spanText}}></span>

  <div [class.textcolor]="isSingleClass">尝试绑定单个class</div>
  <div [class]="multipleClass">尝试绑定多个class</div>

  <p>小明的生日是{{ birthday | date | uppercase }}</p>
  <p>小明的生日是{{ birthday | date:"MM/dd/yy"}}</p>

  <button (click)="addCount($event, 5);consoleCount()">当前数值加1</button>
  <span>当前值是：{{curNumber}}</span>
  `,
  styles: [
    'h1 { color: red; }',
    '.ngclass-color {color: green}',
    '.bgColor{background-color: yellow}',
    '.textcolor{color: red}'
  ]
})

export class HelloWorldComponent {
  public title = '学习Angular第一课';
  public ngClassHasColor = true;
  public ngStyleObj = {
    'color': 'black',
    'font-size': '18px'
  };
  public studySubjects = [
    '环境搭建',
    '项目目录介绍',
    '组件介绍',
    'ng-zorro组件库的引入介绍'
  ];
  public userRole='backend';
  public age = 18;
  public itemImageUrl = '../../assets/bg.png';
  public isDisabledBtn = false;
  public spanText='通过属性绑定来展示span标签的内容';
  public isSingleClass: boolean;
  public multipleClass = {
    bgColor: true,
    textcolor: false,
  };
  public birthday = new Date(1988, 3, 15);
  public curNumber = 1;

  public addCount(event: any, paramsNumber: number): void {
    console.log('12');
    this.curNumber = this.curNumber + paramsNumber;
  }

  public consoleCount(): void {
    console.log(this.curNumber);
  }
}
