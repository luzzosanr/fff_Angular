import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  allProducts: any[] = [];
  renderedProducts: any[] = [];
  filters: any = {
    "minMaxPrice": this.minMaxPriceFilter,
    "brands": this.brandsFilter,
  }
  brands: string[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }
  
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.allProducts = data.products;
      this.allProducts.forEach((product) => {
        if (!this.brands.includes(product.brand)) {
          this.brands.push(product.brand);
        }
      });
      this.renderedProducts = this.allProducts;
    });
  }
  
  //Filters :
  minMaxPriceFilter(min: number, max: number)
  {
    this.renderedProducts = this.allProducts.filter((product) => {
      return product.price >= min && product.price <= max;
    });
  }

  brandsFilter(brands: string[])
  {
    this.renderedProducts = this.allProducts.filter((product) => {
      return brands.includes(product.brand);
    });
  }

  UpdateFilter(filter: {name: string, value: any})
  {
    switch (filter.name) {
      case "minMaxPrice":
        this.minMaxPriceFilter(filter.value[0], filter.value[1]);
        break;
      case "brands":
        this.brandsFilter(filter.value);
        break;
      default:
        break;
    }
  }

}
