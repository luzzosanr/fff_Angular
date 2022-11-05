import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-render',
  templateUrl: './shop-render.component.html',
  styleUrls: ['./shop-render.component.css']
})
export class ShopRenderComponent implements OnInit {
  @Input() filters: any[] = []
  products: any [] = [];

  constructor(
    private productsService: ProductsService,
  ) {}
  
  ngOnInit(): void {
    this.productsService.getProducts(this.filters).subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

}
