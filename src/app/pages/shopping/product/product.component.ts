import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';  
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  brand: string = "";
  slug: string = "";
  product: any = {}
  environment = environment;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.brand = params.brand;
      this.slug = params.slug;
    });

    let params = {
      brand: this.brand,
      slug: this.slug,
    }

    this.productsService.getProduct(params).subscribe((data: any) => {
      this.product = data.product;
    }, (error: any) => {
      if (error.status == 404) {
        this.router.navigate(['/']);
      }
    });
  }

  addToCart() {
    let params = {
      "slug": this.slug,
      "brand": this.brand,
    }
    this.productsService.addToCart(params).subscribe((data: any) => {

      if (this.accountService.checkStatus(data.status))
      {
        this.router.navigate(['/cart']);
      }

    }, (error: any) => {
      if (error.status == 404) {
        this.router.navigate(['/cart']);
      }
    });
  }

}
