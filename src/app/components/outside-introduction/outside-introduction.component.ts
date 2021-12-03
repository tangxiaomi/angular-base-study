import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
enum Color {
  Red,
  Green,
  Blue,
}

interface IPerson {
  age: number;
  gender: string;
  job: string;
  address: string;
  money: number;
}

interface IDeveloper extends IPerson {
  code: boolean;
}


@Component({
  selector: 'app-outside-introduction',
  templateUrl: './outside-introduction.component.html',
  styleUrls: ['./outside-introduction.component.scss']
})

export class OutsideIntroductionComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() public showNumber: number;
  @Output() public curCountChange = new EventEmitter<number>();
  public curCount = 1;
  public inputValue = 5;

  public a: number;
  public b: boolean;
  public c: string;
  public d: any;
  public e: number[] = [1, 2, 31];
  public f: any[] = [1, true,'a', false];
  public g: IPerson[] = [];
  public h: IDeveloper[] = [];
  public backgroundColor = Color;


  public title = '学习Angular第一课';
  public ngClassHasColor = true;
  public ngClassObj = {
    ngcolor: true
  };
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

  // public addCount(event: any, paramsNumber: number): void {
  //   console.log('12');
  //   this.curNumber = this.curNumber + paramsNumber;
  // }

  public consoleCount(): void {
    console.log(this.curNumber);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(this.backgroundColor.Red);
    // @Input()的属性值变更的时候会触发此函数
    // console.log(changes);
  }

  public ngOnInit(): void {
    // 组件初始化的时候会调用一次
    // console.log('init component');
  }

  public ngAfterViewInit(): void {
    // 视图更新之后或者说是DOM元素渲染之后，会调用一次
    // console.log('been inited');
  }

  public ngOnDestroy(): void {
    // 组件销毁的时候调用，一般是将一些定时器或者异步调用在这里清除
    // console.log('destory');
  }

  public addCount(): void {
    this.curCount++;
    this.h = [{
      age: 18,
      gender: '男',
      job: 'ddd',
      address: '上海市',
      money: 28,
      code: true
    }
    ];
    this.curCountChange.emit(this.curCount);
  }

  public consoleValue(value: string): void {
    console.log(value);
  }
}