import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private account: AccountService
  ) { }

  getProducts(filter: any = null) {
    /**
     * Get products, filters need to be added.
     */

    return this.http.get(environment.API_URL + 'products', { withCredentials: true })
  }

  getProduct(params: any) {
    /**
     * Get product by brand and slug.
     */

    return this.http.get(environment.API_URL + 'product', { withCredentials: true, params: params })
  }

  addToCart(data: any) {
    /**
     * Add product to cart.
     */

    return this.http.post(environment.API_URL + 'add_to_cart', data, { withCredentials: true, headers: this.account.csrfHeader() })
  }

  removeFromCart(data: any)
  {
    /**
     * Remove product from cart.
     */
    return this.http.post(environment.API_URL + 'remove_from_cart', data, { withCredentials: true, headers: this.account.csrfHeader() })
  }

  change_cart_quantity(data: any) {
    return this.http.post(environment.API_URL + 'change_cart_quantity', data, { withCredentials: true, headers: this.account.csrfHeader() })
  }

  accessPayment(data: any)
  {
    this.http.post(environment.API_URL + 'payment', data, { withCredentials: true, headers: this.account.csrfHeader() }).subscribe( (data:any) => {
      if (this.account.checkStatus(data.status))
      {
        window.location.href = data.url;
      }
    })
  }

  getCart() {
    /**
     * Get cart of a user.
     */

    return this.http.get(environment.API_URL + 'cart', { withCredentials: true })
  }

  getHistory() {
    /**
     * Get history of a user.
     */

    return this.http.get(environment.API_URL + 'history', { withCredentials: true })
  }
}
