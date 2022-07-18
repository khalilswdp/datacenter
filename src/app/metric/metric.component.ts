import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {
  // the underscore is a common convention for private properties
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  // this is how you define a setter in typescript
  // preceded by set and the name of the method must match the name of the variable

  isDanger() {
    return this.value / this.max > 0.7;
  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && isNaN(changes['value'].currentValue)) {
      this.value = 0;
    }
    if (changes['max'] && isNaN(changes['max'].currentValue)) {
      this.max = 100;
    }
  }

}
