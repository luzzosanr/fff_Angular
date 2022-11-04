import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular_app';

  constructor(
    private router: Router
  ) { }

  shoppingwebsite() {
    /**
     * @return whether the user is on the shopping website.
     */

    return this.router.url.includes('shopping');
  }
}
