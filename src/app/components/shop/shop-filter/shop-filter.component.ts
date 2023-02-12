import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css']
})
export class ShopFilterComponent implements OnInit {
  @Input() brands: string[] = [];
  @Input() extremePrices: [number, number] = [0, 0];
  @Output() filter: any = new EventEmitter();

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

}
