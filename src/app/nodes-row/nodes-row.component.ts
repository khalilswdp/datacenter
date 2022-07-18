import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NodesDetailComponent} from "../nodes-detail/nodes-detail.component";

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() node: any;

  isDanger(prop: string): boolean {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node: any) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

  constructor(private modalService: NgbModal) { }

}
