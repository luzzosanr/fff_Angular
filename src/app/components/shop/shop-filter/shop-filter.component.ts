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
  selectedBrands: string[] = [];

  brandSelected: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

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
