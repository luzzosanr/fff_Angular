import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

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

  priceSliderOptions: Options = {
    floor: 0,
    ceil: 100000,
    step: 100,
    showSelectionBar: true,
    getSelectionBarColor: () => { return "#655021" },
    getPointerColor: () => { return "#655021" },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '';
      }
    }
  };

}
