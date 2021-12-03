import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public defaultNum = 5;
  public valueFromChild: number;

  public handlCurCountChange(value: number): void {
    this.valueFromChild = value;
  }
}
