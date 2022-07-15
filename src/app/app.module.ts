import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Table 4.1 on lifecycle hooks
  // https://angular.io/guide/lifecycle-hooks
  // Types of components and their characteristics 4.3

  // I like this:
  // angular projects and demos to actually learn from
  // https://angular.io/guide/lifecycle-hooks#oninit
  // 4.5.1 Finally, we have a sample of using the ng-bootstrap Progress Bar component. Base
  // I need to understand the difference between content child and view child
}
