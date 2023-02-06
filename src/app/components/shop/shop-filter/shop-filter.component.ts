import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css']
})
export class ShopFilterComponent implements OnInit {
  @Input() brands: string[] = [];
  @Output() filter: any = new EventEmitter();
  minPrice: number = 0;
  maxPrice: number = 100000;
  selectedBrands: string[] = [];

  brandSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedBrands = this.brands;
  }

  modifyPriceRange(minPrice: number = this.minPrice, maxPrice: number = this.maxPrice) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;

    console.log(minPrice, maxPrice);

    this.filter.emit({
      name: "minMaxPrice",
      value: [minPrice, maxPrice]
    });
  }

  modifyBrand(brand: string, checked: any) {
    this.selectedBrands = checked.target.checked ? [...this.selectedBrands, brand] : this.selectedBrands.filter(b => b !== brand);

    this.filter.emit({
      name: "brands",
      value: this.selectedBrands
    });
  }

  isCheck(brand: string) {
    return this.selectedBrands.includes(brand);
  }

}
