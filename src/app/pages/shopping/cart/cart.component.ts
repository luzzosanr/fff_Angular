import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  environment = environment;

  constructor(
    public productsService: ProductsService,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productsService.getCart().subscribe( (data:any) => {
      if (this.accountService.checkStatus(data.status))
      {
        this.cartItems = data.cart_items;
      }
    });
  }

  goToCheckout() {
    this.router.navigate(['/checkout/address']);
  }

}
