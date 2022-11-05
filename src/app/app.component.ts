import { Component } from '@angular/core';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular_app';

  constructor(
    private routingService: RoutingService
  ) { }

  shoppingwebsite() : boolean {
    return !this.routingService.isAdmin();
  }

}
