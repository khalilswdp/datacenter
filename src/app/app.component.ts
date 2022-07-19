import {
  Component, ComponentFactoryResolver, ComponentRef,
  ViewChild, ViewContainerRef,
} from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlertComponent} from "./alert/alert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent;

  // A component reference (that we'll put inside the alertBox)
  alertRef?: ComponentRef<AlertComponent>;
  // We read a specific local template variable #alertBox of type ViewContainerRef
  @ViewChild('alertBox', {read: ViewContainerRef}) alertBox!: ViewContainerRef;

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  alert(date: Date) {
    if (!this.alertRef) {
      const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  // We can have more logic handling here, refreshing multiple components or whatever we want, or even not possible in the html
  refresh() {
    this.dashboard.generateData();
  }
}
