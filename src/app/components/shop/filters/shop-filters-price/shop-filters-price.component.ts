import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop-filters-price',
  templateUrl: './shop-filters-price.component.html',
  styleUrls: ['./shop-filters-price.component.css']
})
export class ShopFiltersPriceComponent implements OnInit {
  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('minCursor', { static: true }) cursorMin: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('maxCursor', { static: true }) cursorMax: ElementRef<HTMLDivElement> | undefined;
  @Output() filter: any = new EventEmitter();
  @Input() extremePrice: [number, number] = [0, 100000];
  minPrice: number = this.extremePrice[0];
  maxPrice: number = this.extremePrice[1];
  size: number = 13;
  selected: ElementRef<HTMLDivElement> | undefined;


  constructor() { }

  ngOnInit(): void {
    if (!this.container || !this.cursorMin || !this.cursorMax) return;
    this.cursorMax.nativeElement.style.left = `${this.container.nativeElement.getBoundingClientRect().width - this.size}px`;
  }

  modifyPriceRange(newPrice: number, isMinPrice: boolean = true) {
    if (isMinPrice && newPrice <= this.maxPrice) {
      this.minPrice = newPrice;
    } else if (!isMinPrice && newPrice >= this.minPrice) {
      this.maxPrice = newPrice;
    } else if (isMinPrice) {
      this.maxPrice = this.minPrice;
    } else {
      this.minPrice = this.maxPrice;
    }

    this.filter.emit({
      name: "minMaxPrice",
      value: [this.minPrice, this.maxPrice]
    });
  }

  pixelToPrice = (pixel: number) => {
    if (!this.container) {
      return 0;
    }
    const containerBounds = this.container.nativeElement.getBoundingClientRect();
    return Math.round(((pixel - this.size) / (containerBounds.width- this.size)) * (this.extremePrice[1] - this.extremePrice[0]) + this.extremePrice[0]);
  }


  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    if (this.cursorMin && event.target === this.cursorMin.nativeElement) {
      this.selected = this.cursorMin;
      this.updateCursorPosition(event.clientX, this.cursorMin);
    } else if (this.cursorMax && event.target === this.cursorMax.nativeElement) {
      this.selected = this.cursorMax;
      this.updateCursorPosition(event.clientX, this.cursorMax);
    }
  }

  onMouseUp(event: MouseEvent) {
    this.selected = undefined;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      this.updateCursorPosition(event.clientX, this.selected);
    }
  }

  updateCursorPosition(clientX: number, cursor: ElementRef<HTMLDivElement> | undefined) {
    if (!this.container || !cursor) {
      return;
    }

    const containerBounds = this.container.nativeElement.getBoundingClientRect();
    let left = Math.max(0, Math.min(clientX - containerBounds.left, containerBounds.width - this.size / 2) - this.size / 2);

    //get the class name from cursor
    const price = Math.round(this.pixelToPrice(left + this.size));
    switch (cursor.nativeElement.className) {
      case "minCursor":
        if (this.cursorMax && price > this.maxPrice - this.pixelToPrice(this.size)) {
          this.maxPrice = Math.round(price + this.pixelToPrice(this.size));
          this.cursorMax.nativeElement.style.left = `${left + this.size}px`;
          this.modifyPriceRange(this.maxPrice, false);
        }
        this.modifyPriceRange(price, true);
        break;
      case "maxCursor":
        if (this.cursorMin && price < this.minPrice + this.pixelToPrice(this.size)) {
          this.minPrice = Math.round(price - this.pixelToPrice(this.size));
          this.cursorMin.nativeElement.style.left = `${left - this.size}px`;
          this.modifyPriceRange(this.minPrice, true);
        }
        this.modifyPriceRange(price, false);
        break;
      }

    cursor.nativeElement.style.left = `${left}px`;

  }
}
