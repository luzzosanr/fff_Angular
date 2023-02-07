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

    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });
    return this.http.post(environment.API_URL + 'add_to_cart', data, { withCredentials: true, headers: headers })
  }

  removeFromCart(data: any) {
    /**
     * Remove product from cart.
     */

    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });
    return this.http.post(environment.API_URL + 'remove_from_cart', data, { withCredentials: true, headers: headers })
  }

  change_cart_quantity(data: any) {
    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });
    return this.http.post(environment.API_URL + 'change_cart_quantity', data, { withCredentials: true, headers: headers })
  }

  accessPayment(data: any) {
    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });
    this.http.post(environment.API_URL + 'payment', data, { withCredentials: true, headers: headers }).subscribe( (data:any) => {
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
