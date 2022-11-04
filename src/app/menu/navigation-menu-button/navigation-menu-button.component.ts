import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-button',
  templateUrl: './navigation-menu-button.component.html',
  styleUrls: ['./navigation-menu-button.component.css']
})
export class NavigationMenuButtonComponent implements OnInit {
  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
