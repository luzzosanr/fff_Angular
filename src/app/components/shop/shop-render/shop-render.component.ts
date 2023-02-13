import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-render',
  templateUrl: './shop-render.component.html',
  styleUrls: ['./shop-render.component.css']
})
export class ShopRenderComponent implements OnInit {
  @Input() products: any[] = [];
  // productByLine: any[][] = [];

  constructor( ) {}

  // ngOnChanges(): void {
  //   this.productByLine = this.chunk(this.products, 4);
  //   console.log(this.productByLine);
  // }
  
  ngOnInit(): void { }

  // chunk(arr: any[], size: number) {
  //   const chunkedArr = [];
  //   let index = 0;
  //   while (index < arr.length) {
  //     chunkedArr.push(arr.slice(index, size + index));
  //     index += size;
  //   }
  //   return chunkedArr;
  // }

}
