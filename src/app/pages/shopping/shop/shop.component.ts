import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: Observable<any>;
  filters: any[] = []

  constructor(
    private productsService: ProductsService,
  ) {
    this.products = this.productsService.getProducts();
  }
  
  // Calling with filters and sorting.


}
