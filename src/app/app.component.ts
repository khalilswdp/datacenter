import { Component, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent;

  // We can have more logic handling here, refreshing multiple components or whatever we want, or even not possible in the html
  refresh() {
    this.dashboard.generateData();
  }
}
