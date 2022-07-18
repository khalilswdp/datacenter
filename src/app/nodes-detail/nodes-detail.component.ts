import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent implements OnInit {
  @Input() node: any;

  constructor(public activeModal: NgbActiveModal) { }

  isDanger(prop: any) {
    return this.node[prop].used /this.node[prop].available > 0.7;
  }

  getType(prop: any) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }

  ngOnInit(): void {
  }

}
