import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() title: string = '';
  @Input() description: string = ' ';
  private _value: number = 0;
  private _max: number = 100;

  @Input('used')
  set value(value: any) {
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }

  get value() : number {
    return this._value;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this._max = max;
  }

  get max() : number {
    return this._max;
  }

  isDanger() {
    return this._value / this._max > 0.7;
  }
  constructor() { }

}
