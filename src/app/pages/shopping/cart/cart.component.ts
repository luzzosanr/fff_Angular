import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  environment = environment;

  constructor(
    private productsService: ProductsService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.productsService.getCart().subscribe( (data:any) => {
      if (this.accountService.checkStatus(data.status))
      {
        this.cartItems = data.cart_items;
      }
    });
  }

}
