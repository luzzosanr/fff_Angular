import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-filter-name',
  templateUrl: './shop-filter-name.component.html',
  styleUrls: ['./shop-filter-name.component.css']
})
export class ShopFilterNameComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
