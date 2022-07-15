import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent implements OnInit {
  @Input() node: any;

  isDanger(prop: string): boolean {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
