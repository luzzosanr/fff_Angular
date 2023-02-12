import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-filters-brands',
  templateUrl: './shop-filters-brands.component.html',
  styleUrls: ['./shop-filters-brands.component.css']
})
export class ShopFiltersBrandsComponent implements OnInit {
  @Input() brands: string[] = [];
  @Output() filter: any = new EventEmitter();
  selectedBrands: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedBrands = this.brands;
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
