import { Component, OnInit } from '@angular/core';

@Component({
  // This is a css selector for the component
  // It can be an element, an attribute or a class
  // https://blog.knoldus.com/different-types-of-component-selectors-in-angular/
  // 'selector' or '[selector]' or '.selector'
  // <selector ***> or <*** selector> or <**** **** class="selector">
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
