import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  /**
   * List of menu items.
   * All item is displayed in the menu.
   */
  menuItems = ["new", "shop", "sales", "brands", "drip box", "about"];

  ngOnInit(): void {
  }

}
